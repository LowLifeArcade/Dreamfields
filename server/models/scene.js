import mongoose from 'mongoose'
const {Schema} = mongoose 
const {ObjectId} = mongoose.Schema

const ScriptDoc = new Schema({
  // some kind of script document
  // Or a link to s3 doc 
})

const sceneSchema = new Schema({
  sceneName: {
    type: String,
    trim: true,
    maxlength: 100,
    required: true
  },
  description: String,
  characters: [String],
  setting: String,
  script: {
    script: ScriptDoc,
    rev: Number
  },
  mainImage: String,
  stripImage: String,
  forProject: ObjectId,
  forReel: ObjectId,
  launched: Boolean,
  productionStage: {
    type:String,
    default:'Pre',
    enum: ['Pre', 'Beat Boards', 'Story Boards', 'Production']
  },
  frameRate: String,
  aspectRatio: String,
  assets: [
    {
      name: String,
      location: String
    }
  ],
  FX: [
    {
      name: String,
      location: String
    }
  ],
  backgrounds: [
    {
      name: String,
      location: String
    }
  ],
  shotList: [
    {
      shot: String,

    }
  ]

})