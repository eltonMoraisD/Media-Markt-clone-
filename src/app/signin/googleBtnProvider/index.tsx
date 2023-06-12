"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { StaticImageData } from "next/image";

interface IGoogleBtnProviderProps {
  providerId: string | undefined;
  title: string | undefined;
  icon: StaticImageData;
}

const GoogleBtnProvider: React.FunctionComponent<IGoogleBtnProviderProps> = ({
  providerId,
  title,
  icon,
}) => {
  return (
    <button className={styles.social__btn} onClick={() => signIn(providerId)}>
      <Image src={icon} alt="logo" height={35} width={35} />
      <span>{title}</span>
    </button>
  );
};

export default GoogleBtnProvider;
