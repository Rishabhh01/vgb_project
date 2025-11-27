const mongoose = require('mongoose');

const chapterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    meetingDay: {
      type: String,
      required: true,
    },
    meetingTime: {
      type: String,
      required: true,
    },
    meetingLocation: {
      type: String,
      required: true,
    },
    virtualMeetingLink: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    leaders: [
      {
        role: String,
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'User',
        },
      },
    ],
    members: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        joinDate: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          enum: ['active', 'inactive', 'pending'],
          default: 'active',
        },
      },
    ],
    memberCount: {
      type: Number,
      required: true,
      default: 0,
    },
    referralsGenerated: {
      type: Number,
      required: true,
      default: 0,
    },
    businessGenerated: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Chapter = mongoose.model('Chapter', chapterSchema);

module.exports = Chapter;
