import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "@/lib/jwt";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  // No token → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Verify token
  const payload = await verifyJWT(token);

  if (!payload) {
    // Invalid or expired → redirect to login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Allow request to continue
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/settings/:path*"], // Protected routes
};
