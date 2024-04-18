import { VerifyAdmin } from "@/src/lib/middlewares/verifyAdmin.middleware";
import { isAuth } from "@/src/lib/middlewares/verifyUser.middleware";
import { CategoryModel } from "@/src/lib/models/category.models";
import { UploadImage } from "@/src/lib/utils/cloudinary";
import httpStatus from "http-status";
import { ApiError } from "next/dist/server/api-utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  try {
    const user = await isAuth(request);
    const admin = await VerifyAdmin(user);

    if (!admin) {
      throw new ApiError(httpStatus.BAD_REQUEST, "can not access this route");
    }

    const category = await CategoryModel.find({}).select(
      "name image.image_url isPublish"
    );

    return NextResponse.json({
      msg: "category fetched",
      category,
      total: category.length,
    });
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
