import Link from "next/link";
import styles from "./styles.module.scss";

const Footer: React.FunctionComponent = (props) => {
  const date = new Date(Date.now()).getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__grid}>
        {footerData.map((text) => (
          <>
            <div>
              <div className={styles.footer__conatiner}>
                <p className={styles.footer__title}>{text.title}</p>
                <ul>
                  <li>
                    {text.details.map((details) => (
                      <>
                        <Link href="#">{details}</Link>
                      </>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className={styles.footer__group}>
        <p className={styles.footer__group__copyright}>
          &#64;<Link href="#">{date}, MediaMarkt Luxembourg</Link>
        </p>
      </div>
    </footer>
  );
};

const footerData = [
  {
    id: "1",
    title: "Contact",
    details: ["Questions fréquentes", "Contactez-nous"],
  },
  {
    id: "2",
    title: "Les tendances actuelles",
    details: [
      "PC Portables",
      "Smart Watch",
      "Tablettes",
      "Apple iPad",
      "Jeux PS5",
      "Machines à café",
      "Accessoires de cuisine",
      "Nintendo Switch",
    ],
  },
  {
    id: "3",
    title: "Services",
    details: [
      "Tous nos services",
      "Infos livraisons",
      "Services après-vente",
      " Retours et échanges",
      "Environnement",
      "Toutes les marques",
    ],
  },
  {
    id: "4",
    title: "A propos",
    details: [
      "A propos de Mediamarkt",
      "Nos magasins",
      "Business Solutions",
      "Conditions générales de vente",
      "RGPD",
      "Cookies",
      "Données juridiques",
      "Préférences relatives aux cookies",
    ],
  },
];

export default Footer;
