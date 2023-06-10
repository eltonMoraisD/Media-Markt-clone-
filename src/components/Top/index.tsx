import styles from "./styles.module.scss";

interface IAppProps {}

const Top: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <div className={styles.top}>
      <ul className={styles.top__container}>
        <li>
          Livraison <span>gratuite</span> à partir de 50€
        </li>
        <li>
          Retours <span>gratuits</span> sous 30 jours
        </li>
        <li>
          Retrait en <span>30 min</span> en magasin
        </li>
        <li>Passez votre commande avant 14h, recevez-la demain</li>
      </ul>
    </div>
  );
};

export default Top;
