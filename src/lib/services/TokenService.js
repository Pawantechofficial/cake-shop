import Jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError";
import httpStatus from "http-status";
const JWT_AUTH = process.env.TOKEN_AUTH_SECRET;
export const generateToken = async (user) => {
  const token = Jwt.sign({ userId: user._id }, JWT_AUTH, {
    expiresIn: "30d",
  });
  return token;
};

export const verifyToken = async (token) => {
  try {
    const verify = Jwt.verify(token, JWT_AUTH);
    return verify["userId"];
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, e.message);
  }
};
