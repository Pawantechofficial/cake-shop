import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    isPurchased: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
export const CartModel = mongoose.models.cart || mongoose.model("cart", Schema);
