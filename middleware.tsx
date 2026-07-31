import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export default async function middleware(req) {
  const token = req.cookies.get("access_token");
  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = { matcher: ["/profile/:path*","/cart"] };
