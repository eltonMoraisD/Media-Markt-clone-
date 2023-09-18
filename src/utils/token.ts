import jwt, { Secret } from "jsonwebtoken"

export const createResetToken = (payload: string) => {
  return jwt.sign(payload, process.env.RESET_TOKEN_SECRET as Secret, {
    expiresIn: "6h",
  });
}