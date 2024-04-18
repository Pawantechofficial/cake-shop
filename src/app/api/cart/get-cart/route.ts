import { UserModel } from "../../../../lib/models/user.models";
import { ConnectDB } from "../../../../lib/config/dbConnect";
import { isAuth } from "../../../../lib/middlewares/verifyUser.middleware";
import httpStatus from "http-status";
import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "../../../../lib/utils/apiError";
import { CartModel } from "@/src/lib/models/cart.models";

ConnectDB();

export const GET = async (request: NextRequest) => {
  try {
    const user = await isAuth(request);
    const existUser: any = await UserModel.findById(user).select("-password");
    if (!existUser) {
      throw new ApiError(401, "User not found");
      return;
    }

    const checkExistCart = await CartModel.find({
      user: user,
      isPurchased: false,
    })
      .populate("product", "name price image.image_url")
      .select("qty");

    const totalPrice = checkExistCart.reduce((acc, item) => {
      const itemPrice = item.product.price * item.qty;
      return acc + itemPrice;
    }, 0);

    return NextResponse.json(
      { msg: "Item fetched", cart: checkExistCart, totalPrice },
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
