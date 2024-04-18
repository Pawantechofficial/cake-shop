import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lower: true,
      trim: true,
    },
    image: {
      type: {
        image_url: {
          type: String,
        },
        cloudnary_public_id: {
          type: String,
        },
      },
      required: true,
    },
    isPublish: {
      type: Boolean,
      default: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    short_disc: {
      type: String,
      required: true,
      trim: true,
    },
    long_disc: {
      type: String,
      required: true,
      trim: true,
    },
    discount: {
      type: Number,
      required: true,
      default: 0,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
export const ProductModel =
  mongoose.models.Product || mongoose.model("Product", Schema);
