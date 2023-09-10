import bcrypt from "bcrypt"

interface ISignInUser {
  password: string,
  user: {
    password: string
  }
}

export const signInUser = async ({ password, user }: ISignInUser) => {
  if (!user.password) {
    throw new Error("Please enter your password.");
  }
  const testPassword = await bcrypt.compare(password, user.password);
  if (!testPassword) {
    throw new Error("Email or password is wrong!");
  }
  return user;
};