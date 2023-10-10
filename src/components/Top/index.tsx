import styles from "./styles.module.scss";

const Top: React.FunctionComponent = (props) => {
  return (
    <div className={styles.top}>
      <ul className={styles.top__container}>
        <li>Operación dstock fuera</li>
        <li>ENVÍO GRATIS desde 49€*</li>
        <li>Financiacíon 0%</li>
      </ul>
    </div>
  );
};

export default Top;
