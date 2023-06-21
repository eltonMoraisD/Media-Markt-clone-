import styles from "./styles.module.scss";

interface IButtonProps {
  text: string;
  type: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ text, type }) => {
  return (
    <button type={type} className={styles.btn}>
      {text}
    </button>
  );
};

export default Button;
