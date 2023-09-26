import React from "react";
import styles from "./styles.module.scss";

interface ICardProps {
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__card}>
        <ul className={styles.card}>
          <li className={styles.card__list}>{children}</li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
