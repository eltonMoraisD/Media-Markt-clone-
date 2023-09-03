import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Card from "../Card";

const ProductCategories: React.FC = () => {
  return (
    <div className={styles.card__container}>
      <Card>
        <div className={styles.card__content}>
          <Image
            width={0}
            height={0}
            src="https://mediamarkt.lu/cdn/shop/files/Sans_titre-2_ee633b7c-3274-4c22-ab22-c068e9bd2cd0.png?v=1693324759"
            alt=""
          />
          <p>Sélection Gaming Playstation</p>
        </div>
      </Card>
      <Card>
        <div className={styles.card__content}>
          <Image
            width={0}
            height={0}
            src="https://mediamarkt.lu/cdn/shop/files/400x400_IT_0096e69a-5647-4060-aa1b-d51bd24d33c8.png?v=1690528840"
            alt=""
          />
          <p>Ordinateurs & Tablettes</p>
        </div>
      </Card>
      <Card>
        <div className={styles.card__content}>
          <Image
            width={0}
            height={0}
            src="https://mediamarkt.lu/cdn/shop/files/400x400_smartphone_9c91c725-554f-4360-b984-6bba5d85eda8.png?v=1690528873"
            alt=""
          />
          <p>Smartphones & Smartwatch</p>
        </div>
      </Card>
      <Card>
        <div className={styles.card__content}>
          <Image
            width={0}
            height={0}
            src="https://mediamarkt.lu/cdn/shop/files/400x400_tvaudio_7fdda1d2-a161-48ca-992c-49379fdb25f5.png?v=1690528902"
            alt=""
          />
          <p>Télévisions & Produits Audio</p>
        </div>
      </Card>
      <Card>
        <div className={styles.card__content}>
          <Image
            width={0}
            height={0}
            src="https://mediamarkt.lu/cdn/shop/files/400x400_cafebeaute_3baedbeb-a28c-4658-ada1-ea86023d743f.png?v=1690528950"
            alt=""
          />
          <p>Cuisine, Ménage & Bien-être</p>
        </div>
      </Card>
    </div>
  );
};

export default ProductCategories;
