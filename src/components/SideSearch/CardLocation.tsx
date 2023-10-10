import { useEffect } from "react";
import styles from "./styles.module.scss";

import Link from "next/link";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  IoIosArrowUp,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";

interface ICarLocation {
  showMore: boolean;
  expand: () => void;
}

const CardLocation: React.FC<ICarLocation> = ({ showMore, expand }) => {
  return (
    <div className={styles.box}>
      <div className={styles.distance}>
        <span>9 km</span>
      </div>
      <h3>MediaMarkt Barcelona - Sant Cugat</h3>
      <div className={styles.box__container}>
        <span>
          <SlLocationPin />
          <span className={styles.text}>
            Parc Empresarial Sant Pau de Riu Sec, Centro Comercial Via Sabadell
            Edificio CSabadell - 08205 Sabadell
          </span>
        </span>
        <span>
          <AiOutlineClockCircle />
          <span className={styles.text}>Cerrado</span>
        </span>
        <div onClick={expand}>
          {showMore ? (
            <>
              <div className={styles.timetables}>
                <div className={styles.timetables__days}>
                  <p>Domingo</p>
                  <p>Lunes</p>
                  <p>Martes</p>
                  <p>Miércoles</p>
                  <p>Jueves</p>
                  <p>Viernes</p>
                  <p>Sábado</p>
                </div>
                <div className={styles.timetables__times}>
                  <p>Cerrado</p>
                  <p>09:30 - 22:00</p>
                  <p>09:30 - 22:00</p>
                  <p>09:30 - 22:00</p>
                  <p>09:30 - 22:00</p>
                  <p>09:30 - 22:00</p>
                  <p>09:30 - 22:00</p>
                </div>
              </div>

              <IoIosArrowUp className={styles.showMore} />
              <span className={styles.showMore}>Ver menos</span>
            </>
          ) : (
            <>
              <IoIosArrowDown className={styles.showMore} />
              <span className={styles.showMore}>Ver más</span>
            </>
          )}
        </div>

        <span>
          <TbTruckDelivery />
          Stop&Go - recoge tu pedide sin salir de tu coche
        </span>
        <Link href="#">
          <IoIosArrowForward />
          <text>Ir a la página de la tienda</text>
        </Link>
      </div>
    </div>
  );
};

export default CardLocation;
