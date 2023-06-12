import styles from "./styles.module.scss";

interface IButtonProps {
  text: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ text }) => {
  return <button className={styles.btn}>{text}</button>;
};

export default Button;
