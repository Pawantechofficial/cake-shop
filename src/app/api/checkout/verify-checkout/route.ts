import { UserModel } from "../../../../lib/models/user.models";
import { ConnectDB } from "../../../../lib/config/dbConnect";
import { isAuth } from "../../../../lib/middlewares/verifyUser.middleware";
import httpStatus from "http-status";
import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "../../../../lib/utils/apiError";
import { CartModel } from "@/src/lib/models/cart.models";
import { CheckoutModel } from "@/src/lib/models/checkout.models";
import { verifyPaymentToken } from "@/src/lib/services/TokenService";
import Stripe from "stripe";
const stripe = new Stripe(process.env.SECRET_KEY as string);

ConnectDB();

export const POST = async (request: NextRequest) => {
  try {
    const user: any = await isAuth(request);
    const existUser: any = await UserModel.findById(user).select("-password");
    if (!existUser) {
      throw new ApiError(401, "User not found");
      return;
    }

    const { token }: { token: string } = await request.json();
    const checkoutId: any = await verifyPaymentToken(token);
    const checkExist = await CheckoutModel.findById(checkoutId);
    if (!checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "unable to verify payment");
      return;
    }

    const checkoutSessionDetails = await stripe.checkout.sessions.retrieve(
      checkExist.session_id
    );
    console.log(checkExist.products);
    console.log(checkoutSessionDetails.payment_status);
    if (checkoutSessionDetails.payment_status === "paid") {
      const data = await CartModel.updateMany(
        {
          user: user,
          product: checkExist?.products.map((c: any) => c.product_id),
        },
        {
          isPurchased: true,
        }
      );
      await CheckoutModel.findByIdAndUpdate(checkExist._id, {
        isComplete: true,
      });

      console.log(data);
    } else {
      throw new ApiError(400, "unable to verify payment");
      return;
    }

    return NextResponse.json(
      { msg: "payment done" },
      { status: httpStatus.OK }
    );
  } catch (error: any) {
    const response = NextResponse.json(
      { code: error.statusCode || 500, error: error.message },
      {
        status: error.statusCode || 500,
      }
    );
    return response;
  }
};
