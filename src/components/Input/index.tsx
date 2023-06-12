import styles from "./styles.module.scss";

interface IAppProps {
  type: string;
  name: string;
}

const Input: React.FunctionComponent<IAppProps> = ({ type, name }) => {
  return <input className={styles.input} type={type} name={name} />;
};

export default Input;
