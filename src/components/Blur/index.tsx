import styles from "./styles.module.scss";

interface IAppProps {
  handleMenuToggle: React.MouseEventHandler<HTMLButtonElement>;
}

const Blur: React.FunctionComponent<IAppProps> = ({ handleMenuToggle }) => {
  return (
    <button className={styles.blur} onClick={(e) => handleMenuToggle(e)} />
  );
};

export default Blur;
