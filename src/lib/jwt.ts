import { JWTPayload, jwtVerify, SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET!);

// Create token
export async function signJWT(payload: JWTPayload, expiresIn = "7d") {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);
}

// Verify token
export async function verifyJWT(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload;
  } catch (error) {
    console.log("Invalid token:", error);
    return null;
  }
}
