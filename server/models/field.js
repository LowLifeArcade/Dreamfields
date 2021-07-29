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
    scenes: [{type:ObjectId, ref: 'Scene'}],
  },
  { timestamps: true }
);

export default mongoose.model('Field', fieldSchema)
