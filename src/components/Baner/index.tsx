import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const Baner: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__baner}>
        <Link href="#">
          <Image
            width={0}
            height={0}
            sizes="100"
            src="//mediamarkt.lu/cdn/shop/files/BANNER_B2S_W35_1296x.jpg?v=1692972671"
            alt="baner"
          ></Image>
        </Link>
      </div>
    </div>
  );
};

export default Baner;
