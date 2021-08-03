import mongoose from 'mongoose';
const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

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
    scenes: [{
      type: ObjectId,
      ref: 'Scene',
    }],
    category: String,
    // production: {
    //   type: Boolean,
    //   default: false,
    // },
    production: String,
    // production: {
    //   type: String,
    //   default: 'Pre',
    //   enum: ['Pre', 'Boards', 'Production', 'Post'],
    // },
    funding: {
      funded: {
        type: Boolean,
        default: false,
      },
      amount: Number,
    },
    frameRate: String,
    // frameRate: {
    //   type: String,
    //   default: '24fps',
    //   enum: ['23.96fps', '24fps', '29.97fps', '30fps', '59.94fps', '60fps'],
    // },
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

export default mongoose.model('Field', fieldSchema);
