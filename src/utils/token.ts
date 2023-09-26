import { SignJWT, jwtVerify } from "jose";

export const createResetToken = async (
  payload: { id: string },
): Promise<string> => {
  try {
    const secret = new TextEncoder().encode(process.env.RESET_TOKEN_SECRET);
    const alg = "HS256";
    return new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime("6h")
      .setIssuedAt()
      .setSubject(payload.id)
      .sign(secret);
  } catch (error) {
    throw error;

  }
}
export async function verifyJwtToken<T>(token: string): Promise<T> {
  try {
    const secret: any = new TextEncoder().encode(process.env.RESET_TOKEN_SECRET)
    if (!secret) {
      throw new Error("JWT Secret key is not matched");
    }
    const { payload } = await jwtVerify(
      token,
      secret
    )
    return payload as T;
  } catch (error: any) {
    throw new Error(error);
  }
}