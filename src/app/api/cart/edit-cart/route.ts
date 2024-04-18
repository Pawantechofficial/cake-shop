import { UserModel } from "../../../../lib/models/user.models";
import { ConnectDB } from "../../../../lib/config/dbConnect";
import { isAuth } from "../../../../lib/middlewares/verifyUser.middleware";
import httpStatus from "http-status";
import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "../../../../lib/utils/apiError";
import { CartModel } from "../../../../lib/models/cart.models";
import { ProductModel } from "../../../../lib/models/product.models";

ConnectDB();

export const POST = async (request: NextRequest) => {
  try {
    const user = await isAuth(request);
    const existUser: any = await UserModel.findById(user).select("-password");
    if (!existUser) {
      throw new ApiError(401, "User not found");
      return;
    }
    const {
      id,
      action,
    }: { id: string; action: string | "increment" | "decrement" } =
      await request.json();

    const checkExistCart = await CartModel.findOne({ user: user, _id: id });

    if (!checkExistCart) {
      throw new ApiError(401, "Product not found in cart");
      return;
    }

    if (action === "increment") {
      await CartModel.findByIdAndUpdate(checkExistCart._id, {
        qty: checkExistCart.qty + 1,
      });
      return NextResponse.json(
        { msg: "Item updated" },
        { status: httpStatus.OK }
      );
    } else if (action === "decrement") {
      if (checkExistCart.qty <= 1) {
        await CartModel.findByIdAndDelete(checkExistCart._id);
        return NextResponse.json(
          { msg: "Item removed" },
          { status: httpStatus.OK }
        );
      }
      await CartModel.findByIdAndUpdate(checkExistCart._id, {
        qty: checkExistCart.qty - 1,
      });
      return NextResponse.json(
        { msg: "Item updated" },
        { status: httpStatus.OK }
      );
    }

    return NextResponse.json(
      { msg: "Item updated" },
      { status: httpStatus.OK }
    );
  } catch (error: any) {
    const response = NextResponse.json(
      { code: error.statusCode || 500, error: error.message },
      {
        status: error.statusCode || 500,
      }
    );
  }
};
