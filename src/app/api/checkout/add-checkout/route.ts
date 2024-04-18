import { UserModel } from "../../../../lib/models/user.models";
import { ConnectDB } from "../../../../lib/config/dbConnect";
import { isAuth } from "../../../../lib/middlewares/verifyUser.middleware";
import httpStatus from "http-status";
import { NextRequest, NextResponse } from "next/server";
import { ApiError } from "../../../../lib/utils/apiError";
import { CartModel } from "@/src/lib/models/cart.models";
import { ProductModel } from "@/src/lib/models/product.models";
import { CheckoutModel } from "@/src/lib/models/checkout.models";
import { generatePaymentToken } from "@/src/lib/services/TokenService";
import Stripe from "stripe";
const stripe = new Stripe(process.env.SECRET_KEY as string);

ConnectDB();

interface CheckOutDetail {
  name: string;
  email: string;
  address: string;
  pin_code: string;
  city: string;
  message: string;
}

export const POST = async (request: NextRequest) => {
  try {
    const user = await isAuth(request);
    const existUser: any = await UserModel.findById(user).select("-password");
    if (!existUser) {
      throw new ApiError(401, "User not found");
      return;
    }
    const checkExistCart = await CartModel.find({ user: user }).select(
      "qty product -_id"
    );

    const check = await CartModel.find({
      user: user,
      isPurchased: false,
    })
      .populate("product", "name price image.image_url")
      .select("qty");

    const totalPrice = check.reduce((acc, item) => {
      const itemPrice = item.product.price * item.qty;
      return acc + itemPrice;
    }, 0);

    const data: CheckOutDetail = await request.json();
    const checkoutData = await CheckoutModel.create({
      name: data.name,
      email: data.email,
      address: data.address,
      pin_code: data.pin_code,
      city: data.city,
      message: data.message,
      user: user,
      products: checkExistCart,
      final_price: totalPrice,
    });

    const token = await generatePaymentToken(checkoutData._id);
    if (!token) {
      throw new ApiError(401, "unable to make payment");
      return;
    }
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "cake",
            },
            unit_amount: totalPrice * 100,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/payment/success?token=" + token,
      cancel_url: "http://localhost:3000/payment/cancel?token=" + token,
    });

    await CheckoutModel.findByIdAndUpdate(checkoutData._id, {
      $set: {
        session_id: checkoutSession.id,
      },
    });

    return NextResponse.json(
      { msg: "payment process", url: checkoutSession.url },
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
