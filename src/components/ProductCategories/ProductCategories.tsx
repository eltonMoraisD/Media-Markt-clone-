import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Card from "../Card";

const data = [
  {
    id: 1,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/39zFhu7IxjhKqpmDH09FOx/9c97407e4649b27845e9bb3d0a364c81/image.png?q=80&w=264",
    title: "Descubre todas nuestras ofertas",
  },
  {
    id: 2,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/2MeGJj1HkAc2z8Rza27ehr/ef924eb8aaf783472bda23f5cfabd96d/1.png?q=80&w=264",
    title: "Televisión",
  },
  {
    id: 3,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/4BytWQBygdxPOp9Qd73wzI/0e2af09199b2754ddee3b1e0cb5c220b/movil.png?q=80&w=264",
    title: "Móviles y smartphones",
  },
  {
    id: 4,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/RK3uOSYgWwBQBgraD2mXy/a0d3d518d0b69aadc3110d130305b224/portatil3.png?q=80&w=264",
    title: "Portátiles",
  },
  {
    id: 5,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/740Wi49tWXuJ6awZoPrHjU/e9b6ca28452470782812f5d8e26f8ecc/electro.png?q=80&w=264",
    title: "Electrodomésticos",
  },
  {
    id: 6,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/1VktOG9JTm3hye23Dpv9bn/8ad14301a9dc56a6fc219bdb6707f106/Proyecto_nuevo__4_.png?q=80&w=264",
    title: "Pequeño electrodoméstico",
  },
];

const ProductCategories: React.FC = () => {
  return (
    <>
      <div className={styles.card}>
        <h2 className={styles.title}>Categorías destacadas</h2>
        <div className={styles.card__container}>
          {data.map((categories) => (
            <Card key={categories.id}>
              <div className={styles.card__content}>
                <Image width={0} height={0} src={categories.img} alt="product" />
                <p>{categories.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductCategories;
