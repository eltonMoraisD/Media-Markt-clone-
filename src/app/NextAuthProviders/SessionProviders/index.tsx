"use client";
import { SessionProvider } from "next-auth/react";

interface ISessionProviderCustomProps {
  children: React.ReactNode;
  session: any;
}

const SessionProviderCustom: React.FunctionComponent<
  ISessionProviderCustomProps
> = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default SessionProviderCustom;
