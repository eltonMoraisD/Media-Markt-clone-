import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Providers } from "@/redux/provider";

import { Source_Sans_Pro } from "next/font/google";
import Footer from "@/components/Footer";

import SessionProviderCustom from "./NextAuthProviders/SessionProviders";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

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
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProviderCustom session={session}>
          <Providers>
            {/* <Top /> */}
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
          </Providers>
        </SessionProviderCustom>
      </body>
    </html>
  );
}
