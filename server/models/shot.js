// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

// export const shotComplexity = {
//   easy: 'easy',
//   medium: 'medium',
//   hard: 'hard',
//   expert: 'expert',
// }

// export const shotFocal = {
//   fish: 'fish eye',
//   ultraWide: 'ultra wide',
//   wide: 'wide',
//   normal: 'normal',
//   long: 'long',
//   tele: 'telephoto'
// }
// shotFocal: {
//   type: String,
//   default: 'normal',
//   enum: ['fish eye', 'ultra wide', 'wide', 'normal', 'long', 'telephoto']
// }

// export const shotAngle = {
//   ground: 'ground',
//   low: 'low',
//   normal: 'normal',
//   high: 'high',
// }
// shotAngle: {
//   type: String,
//   default: 'normal',
//   enum: ['ground', 'low', 'normal', 'high']
// }

// export const shotFrame = {
//   superCloseup: 'super closeup',
//   closeup: 'closeup',
//   medium: 'medium',
//   wide: 'wide',
// }

// shotFrame: {
//   type: String,
//   default: 'normal',
//   enum: ['super closeup', 'closeup', 'medium', 'wide']
// }
const ShotSchema = new Schema(
  {
    shot: String,
    forScene: { type: ObjectId, ref: 'Scene' },
    // complexity: String, // enum
    complexity: {
      type: String,
      default: 'medium',
      enum: ['easy', 'medium', 'hard', 'expert'],
    },
    shotNumber: {
      type: Number,
      require: true,
    },
    shotLength: {
      type: String,
      default: 'medium',
      enum: ['short', 'medium', 'long', 'oner'],
    },
    shotAngle: {
      type: String,
      default: 'normal',
      enum: ['ground', 'low', 'normal', 'high']
    },
    shotFocal: {
      type: String,
      default: 'normal',
      enum: ['fish eye', 'ultra wide', 'wide', 'normal', 'long', 'telephoto']
    },
    shotFrame: {
      type: String,
      default: 'medium',
      enum: ['super closeup', 'closeup', 'medium', 'wide']
    },
    assets: String,
    FX: String,
    characters: [String],
    backgrounds: String,
    description: String,
    breakdown: String,
    // contributors: [ ],
    contributors: [
      {
        contributorId: {
          type: ObjectId,
          ref: 'User',
        },
        name: String,
        role: String,
      },
    ],
    preProBoards: [{ Location: String }],
  },
  {
    strict: false,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Shot', ShotSchema);
