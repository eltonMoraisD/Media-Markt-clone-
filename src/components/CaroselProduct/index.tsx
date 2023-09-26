"use client";
import styles from "./styles.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { MdShoppingCart } from "react-icons/md";
import Image from "next/image";

import Card from "../Card";
import Button from "../Button";

const carouselProducts = [
  {
    id: 1,
    img: "https://mediamarkt.lu/cdn/shop/products/imprimante-multifonction-pixma-ts7451a-blanc-4460c076_213bf94d-dade-48ad-9438-5283ac363562_180x.png?v=1652693546",
    title: "CANON",
    description:
      "CANON Imprimante multifonction PIXMA TS7451a Blanc (4460C076)",
    comparableprice: "139.00",
    price: "79.00",
    promotion: true,
  },
  {
    id: 2,
    img: "https://mediamarkt.lu/cdn/shop/products/lave-linge-frontal-a-wcd-330-wps_71af5492-9663-4732-80ba-d39f83197321_180x.png?v=1672052914",
    title: "Miele",
    description: "Lave-linge frontal A (WCD 330 WPS)",
    comparableprice: "1,239.00",
    price: "897.00",
    promotion: true,
  },
  {
    id: 3,
    img: "https://mediamarkt.lu/cdn/shop/products/krups-dolce-gusto-genio-s-touch-kp440e_180x.png?v=1695208022",
    title: "Krups",
    description: "LKrups Dolce Gusto Genio S Touch (KP440E)",
    comparableprice: "119.95",
    price: "99.00",
    promotion: true,
  },
  {
    id: 4,
    img: "https://mediamarkt.lu/cdn/shop/products/casque-audio-sans-fil-noir-whch720nb-ce7_a8a855c4-590b-4953-a146-2f2e8f885b28_180x.png?v=1678702273",
    title: "Sony",
    description: "Sony Casque audio sans fil Noir (WHCH720NB.CE7)",
    comparableprice: "129.99",
    price: "99.00",
    promotion: true,
  },
  {
    id: 5,
    img: "https://mediamarkt.lu/cdn/shop/products/steelstofzuiger-25-2-v-x-force-flex-11-60-animal-rh9879wo_e6851fa9-4912-4dac-97f8-7dd4c2796fad_180x.png?v=1643582982",
    title: "Rowenta",
    description:
      "ROWENTA Aspirateur balai X-Force Flex 11.60 Animal 25.2 V (RH9879WO)",
    comparableprice: "399.99",
    price: "227.00",
    promotion: true,
  },
  {
    id: 6,
    img: "https://mediamarkt.lu/cdn/shop/products/sony-wf-1000xm5-noir-ecouteurs-sans-fil-avec-reduction-de-bruit_5b71cbbe-ab3f-4819-87dc-141640539576_360x.png?v=1692868110",
    title: "Sony",
    description:
      "SONY WF-1000XM5 Noir – Écouteurs sans fil avec réduction de bruit",
    comparableprice: "319.00",
    price: "299.00",
    promotion: true,
  },
  {
    id: 7,
    img: "https://mediamarkt.lu/cdn/shop/products/samsung-55-neo-qled-4k-smart-tv-qe55qn85catxxn-2023_0ce007a5-e7b9-4dc2-b28b-c5d9187da0c7_360x.png?v=1692281436",
    title: "Samsung",
    description: "SAMSUNG 55 Neo QLED 4K Smart TV QE55QN85CATXXN (2023)",
    comparableprice: "1,499.00",
    price: "1,399.00",
    promotion: true,
  },
  {
    id: 8,
    img: "https://mediamarkt.lu/cdn/shop/products/playstation-vr2_180x.png?v=1684414968",
    title: "Playstation",
    description: "PLAYSTATION Playstation VR2",
    comparableprice: "599.00",
    price: "569.00",
    promotion: true,
  },
  {
    id: 9,
    img: "https://mediamarkt.lu/cdn/shop/products/smartphone-a78-128-gb-glowing-black_9c354d97-a6d6-45b0-9a88-d7d0137033cd_180x.png?v=1679684966",
    title: "OPPO",
    description: "Smartphone A78 128GB Glowing Black",
    comparableprice: "569.00",
    price: "569.00",
    promotion: false,
  },
  {
    id: 10,
    img: "https://mediamarkt.lu/cdn/shop/products/pese-bagage-do9090w_aa5a83bf-a09e-48b9-b82d-0fcf8f2aa7d0_180x.png?v=1655120046",
    title: "DOMO",
    description: "Domo Pèse-bagage(DO9090W)",
    comparableprice: "19.95",
    price: "14.00",
    promotion: true,
  },
];

interface ISampleProps {
  className?: string;
  style?: {
    display: string;
  };
  onClick?: () => void;
}

function SampleNextArrow(props: ISampleProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.next}
      style={{
        ...style,
        display: "block",
        right: 7,
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props: ISampleProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.prevs}
      style={{
        ...style,
        display: "block",
        left: 7,
      }}
      onClick={onClick}
    ></div>
  );
}

const CaroselProducts: React.FC = () => {
  let settings = {
    // dots: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className={styles.title}>
        <h2>Découvrez notre sélection dernière chance</h2>
      </div>

      <Slider className={styles.container} {...settings}>
        {carouselProducts.map((product, index) => (
          <>
            <Card key={product.id}>
              <div className={styles.card}>
                <div className={styles.card__img}>
                  <Image src={product.img} width={150} height={100} alt={""} />
                </div>
                <div className={styles.card__description}>
                  <p>
                    <span>{product.title}</span>
                    {product.description}
                  </p>
                </div>
                <div className={styles.card__price}>
                  {product.promotion && (
                    <p>En general {product.comparableprice}</p>
                  )}
                  <span
                    className={
                      !product.promotion
                        ? styles.card__promotions
                        : styles.card__price__value
                    }
                  >
                    {product.price}
                  </span>
                </div>
                <div className={styles.container__btn}>
                  <Button
                    text="J'achète"
                    type="button"
                    Icon={<MdShoppingCart />}
                  />
                </div>
              </div>
            </Card>
          </>
        ))}
      </Slider>
    </>
  );
};

export default CaroselProducts;
