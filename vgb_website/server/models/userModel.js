// server/models/userModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    company: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: '',
    },
    phone: {
      type: String,
      default: '',
    },
    membershipStatus: {
      type: String,
      enum: ['pending', 'active', 'expired'],
      default: 'pending',
    },
    membershipType: {
      type: String,
      enum: ['BASIC MEMBERSHIP', 'SILVER MEMBERSHIP', 'GOLD MEMBERSHIP'],
      default: 'BASIC MEMBERSHIP', // CHANGED THIS TO MATCH THE ENUM
    },
    membershipStartDate: {
      type: Date,
    },
    membershipEndDate: {
      type: Date,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    // Email verification fields
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationOTP: {
      type: String,
    },
    emailVerificationOTPExpires: {
      type: Date,
    },
    paymentHistory: [
      {
        paymentId: {
          type: String,
          required: true,
        },
        amount: {
          type: Number,
          required: true,
        },
        membershipType: {
          type: String,
          required: true,
        },
        status: {
          type: String,
          required: true,
          default: 'pending',
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

module.exports = User;