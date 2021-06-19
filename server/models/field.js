import mongoose from 'mongoose';
const { Schema } = mongoose;

const { ObjectId } = mongoose.Schema;

const sceneSchema = new Schema(
  {
    title: {
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
    content: {
      type: {},
      minlength: 100,
    },
    video_link: {},
    free_preview: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

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
    price: {
      type: Number,
      default: 12.99,
    },
    image: {},
    category: String,
    published: {
      type: Boolean,
      default: false,
    },
    paid: {
      type: Boolean,
      default: false,
    },
    creator: {
      type: ObjectId,
      ref: 'User',
      required: true,
    },
    scenes: [sceneSchema],
  },
  { timestamps: true }
);

export default mongoose.model('Field', fieldSchema)
