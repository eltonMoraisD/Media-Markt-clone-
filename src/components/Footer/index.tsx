import styles from "./styles.module.scss";

interface IAppProps {}

const Footer: React.FunctionComponent<IAppProps> = (props) => {
  return <footer className={styles.footer__container}>Footer</footer>;
};

export default Footer;
