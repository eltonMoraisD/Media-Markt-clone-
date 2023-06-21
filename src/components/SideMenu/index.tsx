"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import logo from "../../assets/logo-red.png";
import { MdClose } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

interface IAppProps {
  isOpen: boolean;
  handleMenuToggle: React.MouseEventHandler<HTMLButtonElement>;
}

const SideMenu: React.FunctionComponent<IAppProps> = ({
  isOpen,
  handleMenuToggle,
}) => {
  return (
    <>
      {isOpen && (
        <div className={styles.side__container}>
          <div className={styles.side__container__header}>
            <Image
              width={200}
              height={100}
              priority={true}
              className={styles.side__container__header__logo}
              src={logo}
              alt="logo"
            />
            <button onClick={(e) => handleMenuToggle(e)}>
              <MdClose />
            </button>
          </div>
          {sideMenu.map((menu) => (
            <ul key={menu.id} className={styles.side__container__menu}>
              <li className={styles.side__container__menu__btn}>
                <button>
                  {menu.name}
                  <span>
                    <FaChevronRight />
                  </span>
                </button>
              </li>
            </ul>
          ))}
        </div>
      )}
    </>
  );
};

const sideMenu = [
  {
    id: 1,
    name: "Ordinateur & Multimédia",
  },
  {
    id: 2,
    name: "Telephone & Navigation",
  },
  {
    id: 3,
    name: "Television & Audio",
  },
  {
    id: 4,
    name: "Photo & Video",
  },
  {
    id: 5,
    name: "Cusine",
  },
  {
    id: 6,
    name: "Gros électro & Encastrables",
  },
  {
    id: 7,
    name: "Ménage & Bien-être",
  },
  {
    id: 8,
    name: "Gaming & Entertainment",
  },
];

export default SideMenu;
