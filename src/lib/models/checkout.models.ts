import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lower: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    pin_code: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: {
      type: [
        {
          product_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          qty: {
            type: Number,
          },
        },
      ],
    },
    final_price: {
      type: String,
      required: true,
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    session_id: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
export const CheckoutModel =
  mongoose.models.CheckoutModel || mongoose.model("CheckoutModel", Schema);
