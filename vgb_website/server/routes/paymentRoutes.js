// routes/paymentRoutes.js
const express = require('express');
const { createOrder, createSubscription, verifyPayment } = require('../controllers/paymentController');
const router = express.Router();

// Debug middleware for payment routes
router.use((req, res, next) => {
  console.log(`Payment route hit: [${req.method}] ${req.originalUrl}`);
  if (req.method === 'POST') {
    console.log('Request body:', JSON.stringify(req.body));
  }
  next();
});

// Test route to verify API is working
router.get('/test', (req, res) => {
  res.json({ 
    message: 'Payment API is working',
    timestamp: new Date().toISOString(),
    razorpayKeysConfigured: {
      keyId: !!process.env.RAZORPAY_KEY_ID,
      keySecret: !!process.env.RAZORPAY_KEY_SECRET
    }
  });
});

// Direct test endpoint that doesn't use the controller
router.post('/test-create-order', (req, res) => {
  console.log('Test create order route accessed with body:', req.body);
  res.json({
    success: true,
    orderId: 'test_order_' + Date.now(),
    amount: req.body.amount || 0,
    currency: 'INR'
  });
});

// Wrapped route handlers with try/catch for better error handling
router.post('/create-order', async (req, res, next) => {
  try {
    console.log('Create order route accessed with body:', req.body);
    await createOrder(req, res, next);
  } catch (error) {
    console.error('Error in create-order route:', error);
    res.status(500).json({
      success: false,
      message: 'Server error in create-order route',
      error: error.message
    });
  }
});

router.post('/create-subscription', async (req, res, next) => {
  try {
    await createSubscription(req, res, next);
  } catch (error) {
    console.error('Error in create-subscription route:', error);
    res.status(500).json({
      success: false,
      message: 'Server error in create-subscription route',
      error: error.message
    });
  }
});

// Add email sending to the verify-payment route
router.post('/verify-payment', async (req, res, next) => {
  try {
    // First verify the payment with the original handler
    await verifyPayment(req, res, next);
    
    // If payment verification was successful, send donation receipt
    try {
      // Import email service
      const { sendDonationReceiptEmail } = require('../utils/emailService');
      
      // Log the request body
      console.log('Payment verified, attempting to send donation receipt. Payment data:', req.body);
      
      // Extract email and name from the request
      const email = req.body.email || 
                   req.body.notes?.email ||
                   req.body.prefill?.email ||
                   req.body.customer?.email ||
                   req.body.payload?.payment?.entity?.email ||
                   'unknown@example.com';
      
      const name = req.body.name || 
                  (req.body.notes?.firstName ? `${req.body.notes.firstName} ${req.body.notes.lastName || ''}` : '') ||
                  req.body.prefill?.name ||
                  req.body.customer?.name ||
                  req.body.payload?.payment?.entity?.name ||
                  'Supporter';
      
      // Extract amount (convert from paise if needed)
      let amount = parseFloat(req.body.amount || req.body.payload?.payment?.entity?.amount || 0);
      if (amount > 10000) { // If amount seems too large, it's probably in paise
        amount = amount / 100;
      }
      
      console.log('Sending donation receipt to:', email);
      console.log('Donation details:', { name, amount });
      
      // Create donation data
      const donationData = {
        name: name.trim(),
        amount: amount,
        paymentId: req.body.razorpay_payment_id || 
                 req.body.payload?.payment?.entity?.id ||
                 req.body.id || 
                 'unknown',
        paymentMethod: 'Razorpay',
        date: new Date(),
        receiptNumber: `DON-${Date.now().toString().slice(-6)}`,
        taxId: 'YOUR-TAX-ID'
      };
      
      // Send the receipt email
      await sendDonationReceiptEmail(email, donationData);
      console.log('Donation receipt email sent successfully');
    } catch (emailError) {
      console.error('Failed to send donation receipt email:', emailError);
      // Continue with normal flow even if email sending fails
    }
  } catch (error) {
    console.error('Error in verify-payment route:', error);
    res.status(500).json({
      success: false,
      message: 'Server error in verify-payment route',
      error: error.message
    });
  }
});

module.exports = router;