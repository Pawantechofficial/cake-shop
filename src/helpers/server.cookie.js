"use server";
import { cookies } from "next/headers";

export async function getCookie() {
  const cookieStore = await cookies();
  const authCookie = await cookieStore.get("auth");
  if (authCookie) {
    return authCookie;
  } else {
    return null;
  }
}
