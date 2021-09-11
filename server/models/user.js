// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 64,
    },
    picture: {
      type: String,
      default: '/avatar.png',
    },
    role: {
      type: [String],
      default: ['Artist', 'Creator'],
      enum: ['Artist', 'Creator', 'Producer', 'Admin'],
    },
    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {},
    PasswordResetCode: {
      data: String,
      default: '',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
