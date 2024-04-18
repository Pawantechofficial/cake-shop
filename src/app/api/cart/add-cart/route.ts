import { UserModel } from "../../../../lib/models/user.models";
import { ConnectDB } from "../../../../lib/config/dbConnect";
import { isAuth } from "../../../../lib/middlewares/verifyUser.middleware";
import httpStatus from "http-status";
import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "../../../../lib/utils/apiError";
import { CartModel } from "@/src/lib/models/cart.models";
import { ProductModel } from "@/src/lib/models/product.models";

ConnectDB();

export const POST = async (request: NextRequest) => {
  try {
    const user = await isAuth(request);
    const existUser: any = await UserModel.findById(user).select("-password");
    if (!existUser) {
      throw new ApiError(401, "User not found");
      return;
    }
    const { id }: { id: string } = await request.json();
    const existProduct: any = await ProductModel.findById(id);
    if (!existProduct) {
      throw new ApiError(401, "Product not found");
      return;
    }
    const checkExistCart = await CartModel.findOne({ user: user, product: id });
    if (checkExistCart) {
      await CartModel.findByIdAndUpdate(checkExistCart._id, {
        qty: checkExistCart.qty + 1,
      });
      return NextResponse.json(
        { msg: "Item added" },
        { status: httpStatus.OK }
      );
    }
    await CartModel.create({ user: user, product: id, qty: 1 });

    return NextResponse.json({ msg: "Item added" }, { status: httpStatus.OK });
  } catch (error: any) {
    const response = NextResponse.json(
      { code: error.statusCode || 500, error: error.message },
      {
        status: error.statusCode || 500,
      }
    );
  }
};
