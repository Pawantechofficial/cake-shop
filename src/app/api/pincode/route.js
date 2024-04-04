import { NextResponse } from "next/server";

export async function GET(req, res) {
  return NextResponse.json([125102, 125055, 125103, 125105]);
}
