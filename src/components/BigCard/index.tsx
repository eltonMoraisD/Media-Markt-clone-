"use client"
import Slider from "react-slick";
import styles from "./styles.module.scss"
import Card from '../Card'
import Image from "next/image"

const data = [
  {
    id: 1,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/617JQRRMySEP21Y4tzBjOV/149fe0ce2300f9f1ac360fa69a2f32d5/Apple_Home_-_M_vil.PNG",
    title: "Innovacion y tecnologígia",
    subtitle: "Descubre el IPhone, Mac, IPad y mucho más",
    pragraph: "Apple te ofrece una amplia gama de productos de gran calidad, innovación y servicios."
  },
  {
    id: 2,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/zkuwW2VaxggWlLaBeo3W4/902ebf27b7d7bd496bbf89d2f151a540/standard__4_.jpg",
    title: "Hasta el 31/10 a las 9h",
    subtitle: "Ahorra hasta -340€ en una selección",
    pragraph: "La renovación tecnológica para tu televisión"
  },
]

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
const BigCard: React.FC = () => {

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 582,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots: any) => (
      <div
      >
        <ul className={styles.dots}> {dots} </ul>
      </div>
    ),


  };
  return (
    <div className={styles.bigCard}>
      <div className={styles.bigCard__container}>
        {/* <Slider className={styles.bigCard__slider}  {...settings}> */}
        {
          data.map(card => (
            <div className={styles.bigCard__content}>
              <Card key={card.id}>
                <Image className={styles.image} width={0} height={0} src={card.img} alt={card.title} />
                <div className={styles.text}>
                  <h1 className={styles.text__title}>{card.title}</h1>
                  <h2 className={styles.text__subtitle}>{card.subtitle}</h2>
                  <p className={styles.text__pragraph}>{card.pragraph}</p>
                  <span>Ver más</span>
                </div>
              </Card>
            </div>
          ))
        }
        {/* </Slider> */}
      </div>
    </div>
  )
}

export default BigCard
