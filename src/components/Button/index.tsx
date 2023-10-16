"use client";
import styles from "./styles.module.scss";
import ReactLoading from "react-loading";
interface IButtonProps {
  text: string;
  type: "button" | "submit";
  Icon?: React.ReactElement;
  loading?: boolean;
  disabled?: boolean
}

const Button: React.FunctionComponent<IButtonProps> = ({
  text,
  type,
  Icon,
  loading,
  disabled
}) => {
  return (
    <button type={type} className={!loading ? `${styles.btn}` : `${styles.btn} ${styles.disabled}`}>
      {Icon && Icon}
      {loading ? <ReactLoading className={styles.loader} type={"bubbles"} color="#fff" /> : text}
    </button>
  );
};

export default Button;
