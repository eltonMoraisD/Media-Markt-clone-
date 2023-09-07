import GoogleProvider from "next-auth/providers/google";
import NextAuth, { NextAuthOptions } from "next-auth";

// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "./lib/mongodb";

export const authOptions: NextAuthOptions = {
  // adapter: MongoDBAdapter(clientPromise),

  providers: [
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
