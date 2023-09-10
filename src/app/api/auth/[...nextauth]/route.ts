import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider, { CredentialsConfig } from "next-auth/providers/credentials";

import db from "../../../../utils/db"
import { signInUser } from "../../../../helpers/signInUser"
import User from "../../../../models/User"
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "./lib/mongodb";

db.connectDb()

interface ICredentials {
  email: string,
  password: string

}

export const authOptions: NextAuthOptions = {
  // adapter: MongoDBAdapter(clientPromise),

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials: ICredentials, req: Request) {

        const email = credentials.email;
        const password = credentials.password;

        const user: any = await User.findOne({ email });

        if (user) {
          return signInUser({ password, user });
        } else {
          throw new Error("This email doesn't exists!");
        }
      }
    } as any),
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ? process.env.GOOGLE_ID : "",
      clientSecret: process.env.GOOGLE_SECRET ? process.env.GOOGLE_SECRET : "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
