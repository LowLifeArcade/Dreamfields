// import mongoose from 'mongoose';
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;
// mongodb+srv://buildwithme:ifyoubuildittheywillcome@cluster0.8ok3v.mongodb.net/test?authSource=admin&replicaSet=atlas-fwixab-shard-0&readPreference=primary&ssl=true
const sceneSchema = new Schema(
  {
    sceneName: {
      type: String,
      trim: true,
      maxlength: 100,
      required: true,
    },
    contributors: [{ type: ObjectId, ref: 'User' }],
    description: String,
    characters: [{ type: String, trim: true, maxlength: 100 }],
    setting: String,
    script: {
      script: String,
      rev: Number,
    },
    mainImage: String,
    stripImage: String,
    forProject: { type: ObjectId, ref: 'Field', required: true },
    // forReel: ObjectId,
    launched: Boolean,
    productionStage: {
      type: String,
      default: 'Pre',
      enum: ['Pre', 'Boards', 'Production', 'Post'],
    },
    frameRate: String,
    aspectRatio: String,
    assets: [
      {
        name: String,
        location: String,
      },
    ],
    FX: [
      {
        name: String,
        location: String,
      },
    ],
    backgrounds: [
      {
        name: String,
        location: String,
      },
    ],
    shotList: [],
    boards: [],
    // shotList: [
    //   {
    //     shotId: { type: ObjectId, ref: 'Shot' },
    //     shotNumber: Number,
    //     shotName: String,
    //   },
    // ],
    layoutBoards: [
      {
        name: String,
        shotNumber: String,
        panel: String, // this needs to be unique
        artist: String,
        board: String,
        action: String,
        dialogue: String,
        createdAt: String,
        revision: String,
      },
    ],
    beatBoards: [
      {
        name: String,
        shotNumber: String,
        panel: String, // this needs to be unique
        artist: String,
        board: String,
        action: String,
        dialogue: String,
        createdAt: String,
        revision: String,
      },
    ],
    storyBoards: [
      {
        name: String,
        shotNumber: String,
        panel: String, // this needs to be unique
        artist: String,
        board: String,
        action: String,
        dialogue: String,
        createdAt: String,
        revision: String,
      },
    ],
    animatic: String,
    videos: [
      {
        videoName: { type: String, required: true },
        videoKey: { type: String, required: true },
        videoShotNumber: { type: String, required: true },
        sceneId: { type: ObjectId, ref: 'Scene' },
        videoData: {
          Location: { type: String, required: true },
          Bucket: { type: String, required: true },
          Key: { type: String, required: true },
          ETag: { type: String, required: true },
        },
      },
    ],
    revision: Number,
    // const returnedData = {
    //   Location: 'https://dreamfields-bucket.s3.us-west-1.amazonaws.com/M3Cj--wcPikYLzcj05QSC.quicktime',
    //   Bucket: 'dreamfields-bucket',
    //   Key: 'M3Cj--wcPikYLzcj05QSC.quicktime',
    //   ETag: '"1d6f3e4fdad50601ca63ab686f151ae3-7"',
    // };
  },
  {
    strict: false,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Scene', sceneSchema);
