// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const {
  registerUser,
  authUser,
  verifyEmail,
  resendOTP,
  getUserProfile,
  updateUserProfile,
  updateMembershipStatus,
  forgotPassword,
  verifyResetToken,
  resetPassword,
  processDonation // Make sure this is imported
} = require('../controllers/userController');
const User = require('../models/userModel');
const { protect } = require('../middleware/authMiddleware');

// Public routes
router.post('/', registerUser);
router.post('/login', authUser);
router.post('/verify-email', verifyEmail);
router.post('/resend-otp', resendOTP);
router.post('/forgot-password', forgotPassword);
router.get('/reset-password/:token', verifyResetToken);
router.post('/reset-password/:token', resetPassword);
router.post('/donation', processDonation); // Make sure this route is added

// Development-only: debug endpoint to read OTP for a given email
if (process.env.NODE_ENV !== 'production') {
  router.get('/_debug/otp', async (req, res) => {
    try {
      const { email } = req.query;
      if (!email) return res.status(400).json({ message: 'email query param required' });

      const user = await User.findOne({ email }).select('emailVerificationOTP emailVerificationOTPExpires email');
      if (!user) return res.status(404).json({ message: 'user not found' });

      return res.json({ email: user.email, otp: user.emailVerificationOTP, expiresAt: user.emailVerificationOTPExpires });
    } catch (err) {
      console.error('Debug OTP endpoint error:', err);
      return res.status(500).json({ message: 'debug error' });
    }
  });
}

// Protected routes
router.route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router.put('/membership', protect, updateMembershipStatus);

module.exports = router;