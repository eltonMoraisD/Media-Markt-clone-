"use client"
import Slider from "react-slick";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";


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

const carouselImage = [
  {
    id: 1,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/4q5P0a72bE0gn1xMzoi3iC/1778879acc4ae1e00588c1c182cfc24b/1344x354_desktop.png?q=88&fm=jpg&w=1344&h=354&fit=fill",
    imgResponsive: "https://cms-images.mmst.eu/osyynfyvlyjc/4hzl93zIRUiEURgDD8BsSs/9526615836f1530956954830e378e55c/703x500_mobile.png?q=88&fm=jpg&w=700&h=500&fit=fill"

  },
  {
    id: 2,
    img: "https://cms-images.mmst.eu/osyynfyvlyjc/5FHE9ZWhnyhAl4U2HWIiYu/e908a9e13a938944b54dae5a78feedc1/1344x354_desktop.png?q=88&fm=jpg&w=1344&h=354&fit=fill",
    imgResponsive: "https://cms-images.mmst.eu/osyynfyvlyjc/5cG2QSYMy7T9KIQvoadATF/21cbea866133aa7741ac3278b9e3c2a4/703x500_mobile__1_.png?q=88&fm=jpg&w=700&h=500&fit=fill"
  }
]

const CaroselBaner = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
    <>
      <Slider className={styles.slider} {...settings}>
        {
          carouselImage.map((banner: { id: number, img: string, imgResponsive: string }) => (
            <Link key={banner.id} href={""}>
              <picture>
                <source srcSet={banner.img}
                  media="(min-width: 750px)" />
                <Image
                  width={0}
                  height={0}
                  sizes="100"
                  src={banner.imgResponsive}
                  alt="baner"
                />
              </picture>
            </Link>
          ))
        }
      </Slider>
    </>

  );
};



export default CaroselBaner;
