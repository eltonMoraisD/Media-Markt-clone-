import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";
import { AiFillLock } from "react-icons/ai";
import Image from "next/image";
import logo from "../../assets/logo.png";

const HeadAuths: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__main}>
        <Link href="/">
          <Image
            width={350}
            height={99}
            priority={true}
            className={styles.header__main__logo}
            src={logo}
            alt="logo"
          />
        </Link>
        <div className={styles.items}>
          <AiFillLock />
          <span>ACCESSO SEGURO</span>
        </div>
      </div>
    </header>
  );
};

export default HeadAuths;
