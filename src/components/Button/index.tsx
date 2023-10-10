"use client";
import styles from "./styles.module.scss";

interface IButtonProps {
  text: string;
  type: "button" | "submit";
  Icon?: React.ReactElement;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  text,
  type,
  Icon,
}) => {
  return (
    <button type={type} className={styles.btn}>
      {Icon && Icon}
      {text}
    </button>
  );
};

export default Button;
