import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

import { SlLocationPin } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosArrowForward,
} from "react-icons/io";

import Button from "../Button";
import Search from "../Search";
import Link from "next/link";
import CardLocation from "./CardLocation";

interface ISideSearch {
  handleSideSearchToggle: React.MouseEventHandler<HTMLButtonElement>;
}

const SideSearch: React.FC<ISideSearch> = ({ handleSideSearchToggle }) => {
  const [showMore, setShowMore] = useState(false);

  const expand = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__search}>
          <span className={styles.btnClose}>
            <button onClick={handleSideSearchToggle}>
              <MdClose />
            </button>
          </span>
          <h3 className={styles.title}>Selecciona tu tienda</h3>

          <p>
            Introduce tu código postal o ciudad para ver las tiendas más
            cercanas. Esto te permitirá comprobar la disponibilidad del
            producto.
          </p>
          <div className={styles.searchBy}>
            <div className={styles.searchBy__group}>
              <Search />
            </div>
            <Button text="Buscar" type="submit" />
          </div>
        </div>
        {/* Card Location*/}
        <div className={styles.scroll}>
          <div>
            <CardLocation showMore={showMore} expand={expand} />
            <CardLocation showMore={showMore} expand={expand} />
            <CardLocation showMore={showMore} expand={expand} />
            <CardLocation showMore={showMore} expand={expand} />
            <CardLocation showMore={showMore} expand={expand} />
            <CardLocation showMore={showMore} expand={expand} />
            <CardLocation showMore={showMore} expand={expand} />
            <CardLocation showMore={showMore} expand={expand} />
            <CardLocation showMore={showMore} expand={expand} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSearch;
