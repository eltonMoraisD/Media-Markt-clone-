import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Card from "../Card";

const products = [
  {
    id: 1,
    img: "https://mediamarkt.lu/cdn/shop/files/Sans_titre-2_ee633b7c-3274-4c22-ab22-c068e9bd2cd0.png?v=1693324759",
    title: "Sélection Gaming Playstation",
  },
  {
    id: 2,
    img: "https://mediamarkt.lu/cdn/shop/files/400x400_IT_0096e69a-5647-4060-aa1b-d51bd24d33c8.png?v=1690528840",
    title: "Ordinateurs & Tablettes",
  },
  {
    id: 3,
    img: "https://mediamarkt.lu/cdn/shop/files/400x400_smartphone_9c91c725-554f-4360-b984-6bba5d85eda8.png?v=1690528873",
    title: "Smartphones & Smartwatch",
  },
  {
    id: 4,
    img: "https://mediamarkt.lu/cdn/shop/files/400x400_tvaudio_7fdda1d2-a161-48ca-992c-49379fdb25f5.png?v=1690528902",
    title: "Télévisions & Produits Audio",
  },
  {
    id: 5,
    img: "https://mediamarkt.lu/cdn/shop/files/400x400_cafebeaute_3baedbeb-a28c-4658-ada1-ea86023d743f.png?v=1690528950",
    title: "Cuisine, Ménage & Bien-être",
  },
  {
    id: 6,
    img: "https://mediamarkt.lu/cdn/shop/files/400x400_blanc_74a01e7f-bbbc-40ab-a136-2f22b980f5ce.png?v=1690528989",
    title: "Gros Electroménager",
  },
];

const ProductCategories: React.FC = () => {
  return (
    <div className={styles.card__container}>
      {products.map((product) => (
        <Card key={product.id}>
          <div className={styles.card__content}>
            <Image width={0} height={0} src={product.img} alt="" />
            <p>{product.title}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ProductCategories;
