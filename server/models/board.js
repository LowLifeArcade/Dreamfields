// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const BoardSchema = new Schema(
  {
    artist: {
      userName: String,
      userId: { type: ObjectId, ref: 'User' },
      avatar: String,
    },
    boardData: {},
    forScene: String,
    forShot: String,
  },
  {
    strict: false,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Board', BoardSchema);
