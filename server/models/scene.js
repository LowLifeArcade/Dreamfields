import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const sceneSchema = new Schema({
  sceneName: {
    type: String,
    trim: true,
    maxlength: 100,
    required: true,
  },
  contributors: [{ type: ObjectId, ref: 'User' }],
  description: String,
  characters: [String],
  setting: String,
  script: {
    script: String,
    rev: Number,
  },
  mainImage: String,
  stripImage: String,
  forProject: { type: ObjectId, ref: 'Field' },
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
  shotList: [
    // this is the breakdown
    {
      shot: String,
      complexity: String,
      assets: String,
      FX: String,
      characters: [String],
      backgrounds: String,
      description: String,
      breakdown: String,
      preProBoards: [{ Location: String }],
    },
  ],
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
  video: { Location: String, name: String, shot: String, rev: Number },
  revision: Number,
});

export default mongoose.model('Scene', sceneSchema);
