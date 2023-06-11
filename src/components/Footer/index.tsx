import styles from "./styles.module.scss";

interface IAppProps {}

const Footer: React.FunctionComponent<IAppProps> = (props) => {
  return <div className={styles.footer__container}>Footer</div>;
};

export default Footer;
