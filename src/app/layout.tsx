import "../styles/globals.scss";

import { Providers } from "@/redux/provider";

import Top from "@/components/Top";
import { Source_Sans_Pro } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import SessionProviderCustom from "./NextAuthProviders/SessionProviders";

const inter = Source_Sans_Pro({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "MediaMarkt clone",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const session = await getServerSession(authOptions);
  // console.log("mememe", session);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/*  TO DO - need to pass the session to the session provider */}
        <Providers>
          <SessionProviderCustom>
            <Top />
            <Header />
            {children}
            <Footer />
          </SessionProviderCustom>
        </Providers>
      </body>
    </html>
  );
}
