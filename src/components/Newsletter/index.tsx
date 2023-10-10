import React from "react";
import styles from "./styles.module.scss";

interface INewsletterProps {
  title?: string;
  text: string;
  subtitle: string;
}

const Newsletter: React.FC<INewsletterProps> = ({ title,text,subtitle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__newsletter}>
        <h4 className={styles.container__title}>{title}</h4>
        <div className={styles.container__group}>
          <input type="checkbox" />
          <span>
            {text}
          </span>
        </div>
        <p className={styles.subtitle}>
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
