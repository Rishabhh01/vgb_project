#!/usr/bin/env node
/**
 * scripts/e2e-auth-test.js
 * End-to-end test for auth flow:
 *  - registers a test user
 *  - reads OTP from MongoDB
 *  - verifies the email using OTP
 *  - logs in and fetches profile
 *
 * Usage: Set environment variables and run `node scripts/e2e-auth-test.js`
 * Environment variables used:
 *  - MONGO_URI (required)   : full Mongo connection string
 *  - API_URL (optional)     : base API URL (default http://localhost:5012)
 *
 * This script is intended for use in a local dev environment only.
 */

const axios = require('axios');
let mongoose = null; // lazily loaded only if DB fallback is used
const crypto = require('crypto');
require('dotenv').config();

const API_URL = process.env.API_URL || process.env.VITE_API_URL || 'http://localhost:5012';
const MONGO_URI = process.env.MONGO_URI;

const timeout = (ms) => new Promise((r) => setTimeout(r, ms));

async function run() {
  const timestamp = Date.now();
  const testEmail = `e2e+${timestamp}@example.test`;
  const password = 'Test#1234';

  console.log('Starting E2E auth test');
  console.log('API URL:', API_URL);
  console.log('Test email:', testEmail);

  try {
    // 1) Register
    const registerRes = await axios.post(`${API_URL}/api/users`, {
      name: 'E2E Test User',
      email: testEmail,
      password,
      company: 'Test Co',
      profession: 'Tester'
    }, { timeout: 15000 });

    console.log('Register response:', registerRes.data);

    // Wait briefly for DB write
    await timeout(1000);

    // 2) Try to fetch OTP using development debug endpoint (safer for in-memory DB)
    let otp = null;
    try {
      const debugRes = await axios.get(`${API_URL}/api/users/_debug/otp`, { params: { email: testEmail }, timeout: 5000 });
      if (debugRes?.data?.otp) {
        otp = debugRes.data.otp;
        console.log('Found OTP via debug endpoint:', otp);
      }
    } catch (err) {
      console.log('Debug endpoint not available or returned error, falling back to direct DB access if MONGO_URI provided');
    }

    // Fallback to direct DB read if debug endpoint is not available and MONGO_URI is set
    if (!otp) {
      if (!MONGO_URI) throw new Error('No OTP found via debug endpoint and MONGO_URI not provided');

      // Connect to Mongo to fetch OTP (lazy require)
      mongoose = require('mongoose');
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      const User = mongoose.model('User', new mongoose.Schema({}, { strict: false, collection: 'users' }));
      const userDoc = await User.findOne({ email: testEmail }).lean();

      if (!userDoc) throw new Error('User not found in DB after registration');

      otp = userDoc.emailVerificationOTP;
      if (!otp) throw new Error('OTP not present in user record (maybe email verification not configured?)');

      console.log('Found OTP in DB:', otp);
    }

    // 3) Verify email
    const verifyRes = await axios.post(`${API_URL}/api/users/verify-email`, {
      email: testEmail,
      otp
    }, { timeout: 15000 });

    console.log('Verify response:', verifyRes.data);

    // 4) Login
    const loginRes = await axios.post(`${API_URL}/api/users/login`, {
      email: testEmail,
      password
    }, { timeout: 15000 });

    console.log('Login response:', loginRes.data);

    const token = loginRes.data.token;
    if (!token) throw new Error('Login did not return token');

    // 5) Get profile
    const profileRes = await axios.get(`${API_URL}/api/users/profile`, {
      headers: { Authorization: `Bearer ${token}` },
      timeout: 10000
    });

    console.log('Profile response:', profileRes.data);

    console.log('E2E auth flow completed successfully ✅');
    process.exit(0);
  } catch (err) {
    console.error('E2E auth test failed:', err.message || err);
    // Dump the full error object for debugging (including axios response if present)
    try {
      console.error('Full error:', JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
    } catch (dumpErr) {
      console.error('Could not stringify error object:', dumpErr);
    }
    if (err.response && err.response.data) console.error('Response body:', err.response.data);
    process.exit(1);
  } finally {
    try { await mongoose.disconnect(); } catch (e) { /* ignore */ }
  }
}

run();
