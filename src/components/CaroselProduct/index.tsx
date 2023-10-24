"use client";
import styles from "./styles.module.scss";

import React from "react";
import Slider from "react-slick";
import { MdShoppingCart } from "react-icons/md";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import Image from "next/image";

import Card from "../Card";
import Button from "../Button";

const carouselProducts = [
  {
    id: 1,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_104595207?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "TV LED 85 - Samsung TU85CU7175UXXC, UHD 4K, Smart TV, PurColor, Object Tracking Sound Lite, Adaptive Sound, Motion Xcelerator, Negro",
    ads: [{ text: "Renove 4€ x pulgada" }],
    ratings: 20,
    comparableprice: "1539,-",
    price: "1199",
    promotion: true,
  },
  {
    id: 2,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_124080220?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "TV LED 85 - Samsung TU85CU7175UXXC, UHD 4K, Smart TV, PurColor, Object Tracking Sound Lite, Adaptive Sound, Motion Xcelerator, Negro",
    ads: [{ text: "Renove 1€ x kilo" }],
    ratings: 2,
    comparableprice: "1048,-",
    price: "955",
    promotion: true,
  },
  {
    id: 3,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_96585590?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Cafetera superautomática - De'Longhi Magnifica S ECAM 22.113.B, Molinillo integrado, 13 config,Negro",
    ads: [{ text: "Renove -60€" }, { text: "Top venta" }],
    ratings: 43,
    comparableprice: "359,-",
    price: "299",
    promotion: true,
  },
  {
    id: 4,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88528157?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Barra de sonido - Sonos Beam Gen 2,  Wi-Fi, HDMI, Amazon Alexa, Ecualizador, Negro",
    ads: [{ text: "Renove -100€" }, { text: "Top venta" }],
    ratings: 20,
    comparableprice: "549,-",
    price: "449",
    promotion: true,
  },
  {
    id: 5,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_103917267?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "TV OLED 65 - LG OLED65C35LA, OLED 4K, Inteligente α9  4K Gen6, Smart TV, DVB-T2 (H.265), Negro",
    ads: [{ text: "Reembolso 200€" }],
    ratings: 32,
    comparableprice: "2159,-",
    price: "1899",
    promotion: true,
  },
  {
    id: 6,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97431881?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Lavadora carga frontal - Samsung WW90T534DTW/S3, 9 Kg, 1400 rpm, Auto-dosificación, EcoBubble™, WiFi, Blanco",
    ads: [{ text: "Renove -1€ x kilo" }, { text: "Top venta" }],
    ratings: 12,
    comparableprice: "511,-",
    price: "444",
    promotion: true,
  },
  {
    id: 7,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_130655708?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Freidora de aire - Cosori Dual Blaze Chef Edition, Doble resistencia, 1700 W,  6.4 L, 12 Funciones, Sistema 360 ThermoIQ, Negro",
    ads: [{ text: "Renove -25€" }, { text: "Top venta" }],
    ratings: 20,
    comparableprice: "184,",
    price: "159",
    promotion: true,
  },
  {
    id: 8,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106913388?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Barra de sonido - Samsung HW-Q930C/ZF, Bluetooth, Dolby Atmos inalámbrico, 42W, 9.1.4 canales, Compatible con asistentes de voz, WiFi, Negro",
    ads: [{ text: "Renove 100€" }, { text: "Reembolso 150€" }],
    ratings: 10,
    comparableprice: "849,",
    price: "749",
    promotion: true,
  },
  {
    id: 9,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_130548819?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "TV OLED 55 - Sony BRAVIA XR 55A80L, 4K HDR 120, HDMI 2.1 Perfecto PS5, Smart TV (Google TV), Alexa, Siri, Bluetooth, Chromecast, Eco, Diseño Elegante",
    ads: [{ text: "Renove 4€ x pulgada" }],
    ratings: 2,
    comparableprice: "1869",
    price: "1649",
    promotion: false,
  },
  {
    id: 10,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_93916748?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Microonda integrable - Balay 3CG6112X3, Potencia 800W, 5 niveles, 20 L, Inox",
    ads: [{ text: "Renove 1€ x kilo" }],
    ratings: 20,
    comparableprice: "176,-",
    price: "159",
    promotion: true,
  },

  {
    id: 11,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_131053545?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Aspirador escoba - Dyson v8™ Origin, Potencia 115 W, Autonomía 40 min, Con Accesorios, Morado",
    ads: [{ text: "Renove -50€" }],
    ratings: 12,
    comparableprice: "329,-",
    price: "279",
    promotion: true,
  },
  {
    id: 12,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_106480469?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Barra de sonido - Sony HT-S2000, 3.1 Canales, Dolby Atmos, DTS:X, Bluetooth, Subwoofer integrado dual, 350 W, Sonido envolvente, HDMI, Negro",
    ads: [{ text: "Renove -50€" }],
    ratings: 19,
    comparableprice: "399,-",
    price: "349",
    promotion: true,
  },
  {
    id: 13,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_104784182?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: `"TV OLED 77" - Samsung TQ77S93CATXXC, OLED 4K, Neural Quantum Processor 4K, Smart TV, DVB-T2 (H.265), Carbón Silver"`,
    ads: [{ text: "Renove 4€ x pulgada" }, { text: "Top venta" }],
    ratings: 12,
    comparableprice: "2907,-",
    price: "2599",
    promotion: true,
  },
  {
    id: 14,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99849020?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Placa de inducción - AEG IAE63421FB, 3 zonas, Zona Flex, Biselada, 60 cm, Negro",
    ads: [{ text: "Renove 30€ x kilo" }],
    ratings: 12,
    comparableprice: "462,-",
    price: "429",
    promotion: true,
  },
  {
    id: 15,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_126653196?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Depiladora IPL- Braun Luz Pulsada Silk-expert Pro 5 PL5154, Reducción Permanente Vello Visible, Skin Pro 2.0",
    ads: [{ text: "Hasta 100€ reembolso" }],
    ratings: 42,
    comparableprice: "409,-",
    price: "329",
    promotion: true,
  },
  {
    id: 16,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_104056297?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: `"TV OLED 55" - LG OLED55B36LA, OLED 4K, Inteligente α7  4K Gen6, Smart TV, DVB-T2 (H.265), Negro"`,
    ads: [{ text: "Reembolso 150€" }],
    ratings: 12,
    comparableprice: "1419,-",
    price: "1199",
    promotion: true,
  },
  {
    id: 17,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_108769390?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Frigorífico combi - LG GBB62PZGGN, No Frost, 203 cm, 384 l, DoorCooling+™, FRESHConverter™, Inox",
    ads: [{ text: "Renove 1€ x kilo" }],
    ratings: 50,
    comparableprice: "675,-",
    price: "597",
    promotion: true,
  },
  {
    id: 18,
    img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_97329117?x=280&y=190&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=280&ey=190&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=280&cdy=190",
    title: "Centro de planchado - Rowenta DG9226 Silence Steam Pro, 2800 W, 7.6 bar, 140 g/min, Golpe vapor 490 gr/min, 1.3 L, Suela Microsteam 400 HD Láser, Azul",
    ads: [{ text: "Renove -80€" }],
    ratings: 12,
    comparableprice: "309,-",
    price: "229",
    promotion: true,
  }
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
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props: ISampleProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={styles.prevs}
      onClick={onClick}
    ></div>
  );
}

const CaroselProducts: React.FC = () => {
  let settings = {
    dots: false,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
        breakpoint: 1172,
        settings: {
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 706,
        settings: {
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          slidesToShow: 2,
          slidesToScroll: 2,
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
        <h2>Baseado en tu navegación</h2>
        <Slider className={styles.container}  {...settings}>
          {carouselProducts.map((product, index) => (
            <>
              <Card key={product.id}>
                <div className={styles.card}>

                  <div className={styles.card__wrapper}>
                    {product.ads?.map(ad => (
                      <div className={styles.card__ad}>
                        <span>{ad.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className={styles.card__img}>
                    <Image src={product.img} width={150} height={100} alt={product.title} />
                  </div>

                  <div className={styles.card__ratings}>
                    <BsStarFill className={true ? styles.active : ""} />
                    <BsStarFill className={true ? styles.active : ""} />
                    <BsStarFill className={true ? styles.active : ""} />
                    <BsStarFill className={false ? styles.active : ""} />
                    <BsStarFill className={false ? styles.active : ""} />
                    <span>{product.ratings}</span>
                  </div>

                  <div className={styles.card__title}>
                    <p>
                      <span>{product.title}</span>
                    </p>
                  </div>

                  <div className={styles.card__sheets}>
                    <div className={styles.right}>
                      <span>A</span>
                      <span>+</span>
                      <span>G</span>
                    </div>
                    <div className={styles.shape}>
                      <span>F</span>
                      <div className={styles.triangle}>
                      </div>
                    </div>
                    <p className={styles.text}>Ficha técnica</p>
                  </div>

                  <div className={styles.card__prices}>
                    <span className={styles.comparablePrice}>{product.comparableprice}</span>
                    <span className={styles.price}>{product.price}, - €</span>
                    <p>IVA incl. con envío gratis</p>
                  </div>
                </div>
              </Card>
            </>
          ))}
        </Slider>
      </div>

    </>
  );
};

export default CaroselProducts;
