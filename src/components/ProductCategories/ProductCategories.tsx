import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Card from "../Card";

const mainCategories = [
  {
    id: 1,
    img: "https://mediamarkt.lu/cdn/shop/files/1_35e352b8-54e7-41ef-911f-3dfd2ba8334b.jpg?v=1694791767",
    title: "Précommande FC24",
  },
  {
    id: 2,
    img: "https://mediamarkt.lu/cdn/shop/files/5_1ffea9b9-c53f-43c0-9bb9-34624bbf387b.jpg?v=1695025268",
    title: "Sélection Dyson",
  },
  {
    id: 3,
    img: "https://mediamarkt.lu/cdn/shop/files/3_47a6e118-bc8a-420e-b835-c4fd2a0d0355.jpg?v=1695025566",
    title: "Sélection informatique",
  },
  {
    id: 4,
    img: "https://mediamarkt.lu/cdn/shop/files/4_a291f22f-38b7-428d-bf75-f91cb8a27117.jpg?v=1694791813",
    title: "Sélection TV & audio",
  },
  {
    id: 5,
    img: "https://mediamarkt.lu/cdn/shop/files/5_abd13757-d9fb-439b-b3be-33f4c761fb6e.jpg?v=1694791813",
    title: "Sélection lave-linge & sèche-linge",
  },
  {
    id: 6,
    img: "https://mediamarkt.lu/cdn/shop/files/6_16e3aac4-346e-4f54-8036-341a9d770f87.jpg?v=1694791813",
    title: "Petits prix",
  },
];

const appleCategories = [
  {
    id: 1,
    img: "https://mediamarkt.lu/cdn/shop/files/iphone-1_e1c94a19-e421-49e4-a2f9-71e07c48ffbb.jpg?v=1694792014",
    title: "iPhone 15",
  },
  {
    id: 2,
    img: "https://mediamarkt.lu/cdn/shop/files/iphone-2_0728f2d8-2f9b-4aad-bf95-17b19be79456.jpg?v=1694792013",
    title: "iPhone 15 Pro",
  },
  {
    id: 3,
    img: "https://mediamarkt.lu/cdn/shop/files/iphone-3_5423e5b5-cbd4-476c-bfc2-bc0446aac344.jpg?v=1694792014",
    title: "iPhone 15 Pro Max",
  },
  {
    id: 4,
    img: "https://mediamarkt.lu/cdn/shop/files/iphone-4_f1a7daac-01f8-4cce-bac9-9022bb8e1f77.jpg?v=1694792013",
    title: "Apple Watch Series 9",
  },
  {
    id: 5,
    img: "https://mediamarkt.lu/cdn/shop/files/iphone-5_025cc3da-9198-4927-a750-fa8b30e83bad.jpg?v=1694792013",
    title: "Apple Watch SE",
  },
  {
    id: 6,
    img: "https://mediamarkt.lu/cdn/shop/files/iphone-6_8b4c186b-b900-48e0-be4a-dbf0415eccb3.jpg?v=1694792014",
    title: "Apple Watch Ultra 2",
  },
];

const ProductCategories: React.FC = () => {
  return (
    <>
      <div className={styles.card__container}>
        {mainCategories.map((categories) => (
          <Card key={categories.id}>
            <div className={styles.card__content}>
              <Image width={0} height={0} src={categories.img} alt="product" />
              <p>{categories.title}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className={styles.card__container}>
        {appleCategories.map((categories) => (
          <Card key={categories.id}>
            <div className={styles.card__content}>
              <Image width={0} height={0} src={categories.img} alt="product" />
              <p>{categories.title}</p>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductCategories;
