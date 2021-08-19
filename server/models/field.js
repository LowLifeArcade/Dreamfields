// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const fieldSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 320,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: {},
      minlength: 100,
      required: true,
    },
    image: {
      name: String,
      Location: String,
    },
    script: {
      Location: String,
      rev: Number,
    },
    scenes: [
      {
        type: ObjectId,
        ref: 'Scene',
      },
    ],
    category: String,
    // production: String, //   enum: ['Pre', 'Boards', 'Production', 'Post'],
    production: {
      type: String,
      default: 'Pre',
      enum: ['Pre', 'Boards', 'Production', 'Post'],
    },
    funding: {
      funded: {
        type: Boolean,
        default: false,
      },
      amount: Number,
    },
    // frameRate: String, //   enum: ['23.96fps', '24fps', '29.97fps', '30fps', '59.94fps', '60fps'],
    frameRate: {
      type: String,
      default: '24fps',
      enum: ['23.96fps', '24fps', '29.97fps', '30fps', '59.94fps', '60fps'],
    },
    aspectRatio: String,
    creator: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    timeLine: [{ type: ObjectId, ref: 'Scene' }],
    contributors: [String],
    rev: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Field', fieldSchema);
