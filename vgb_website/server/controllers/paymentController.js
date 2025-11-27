// controllers/paymentController.js
const asyncHandler = require('express-async-handler');
const Razorpay = require('razorpay');

// Initialize Razorpay only if credentials are available
let razorpayInstance;
try {
  if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
    razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET
    });
    
    console.log('Razorpay initialized successfully');
  } else {
    console.warn('Razorpay credentials missing - using mock mode');
  }
} catch (error) {
  console.error('Failed to initialize Razorpay:', error);
}

// Create an order for one-time donation
const createOrder = asyncHandler(async (req, res) => {
  try {
    const { amount, description } = req.body;
    
    console.log(`Creating order with amount: ${amount} INR`);
    
    // Validate request
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Valid amount is required',
      });
    }
    
    // If Razorpay is not initialized, return a mock response
    if (!razorpayInstance) {
      console.log('Using mock order creation');
      return res.status(200).json({
        success: true,
        orderId: 'mock_order_' + Date.now(),
        amount: parseFloat(amount),
        currency: 'INR',
        isMock: true
      });
    }
    
    // Create an order with Razorpay
    const options = {
      amount: Math.round(amount * 100), // convert rupees to paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: 1, // automatic capture
      notes: {
        description: description || 'Donation to Vishwa Guru Bharat',
      }
    };
    
    const order = await razorpayInstance.orders.create(options);
    console.log('Order created successfully:', order.id);
    
    res.status(200).json({
      success: true,
      orderId: order.id,
      amount: order.amount / 100, // Convert back to rupees for frontend
      currency: order.currency,
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to create order',
      error: error.toString()
    });
  }
});

// Simple mock implementation for subscription and verification
const createSubscription = asyncHandler(async (req, res) => {
  const { amount } = req.body;
  
  res.status(200).json({
    success: true,
    orderId: 'mock_subscription_' + Date.now(),
    amount: parseFloat(amount) || 0,
    currency: 'INR',
    subscription: {
      id: 'mock_sub_' + Date.now(),
      status: 'created'
    }
  });
});

const verifyPayment = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Payment verified successfully',
  });
});

module.exports = { createOrder, createSubscription, verifyPayment };