import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

const Baner = ({ source }: { source: string }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__group}>
        <div className={styles.container__baner}>
          <Link href="#">
            <Image
              width={0}
              height={0}
              sizes="100"
              src={source}
              alt="baner"
            ></Image>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Baner;
