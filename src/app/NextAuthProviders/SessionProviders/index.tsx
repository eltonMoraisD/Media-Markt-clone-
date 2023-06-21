"use client";
import { SessionProvider } from "next-auth/react";

interface ISessionProviderCustomProps {
  children: React.ReactNode;
}

const SessionProviderCustom: React.FunctionComponent<
  ISessionProviderCustomProps
> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderCustom;
