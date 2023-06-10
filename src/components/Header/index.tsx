"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

import { RiSearch2Line, RiShoppingCart2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { useState } from "react";
import SideMenu from "../SideMenu";

interface IAppProps {
  isOpen: Boolean;
  handleMenuToggle: React.MouseEventHandler<HTMLButtonElement>;
}

const Header: React.FunctionComponent<IAppProps> = () => {
  const [isOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setMenuOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.header__top}>
          <Link href="#">Notre selection d’articles en promotion</Link>
          <Link href="#">Business Solutions</Link>
          <Link href="#">Services</Link>
          <Link href="#">Actions Enoprimes</Link>
        </div>
        <div className={styles.header__main}>
          <Link href="#">
            <Image
              className={styles.header__main__logo}
              src={logo}
              alt="logo"
            />
          </Link>
          <button
            onClick={(e) => handleMenuToggle(e)}
            className={styles.header__menu}
          >
            <GiHamburgerMenu />
            <span>Nos categories</span>
          </button>
          <div className={styles.header__search}>
            <button className={styles.header__search__btn}>
              <RiSearch2Line />
            </button>
            <input type="text" placeholder="Rechercer" />
          </div>

          <div className={styles.header__wrapper}>
            <span className={styles.header__wrapper__icons}>
              <Link href="#">
                <FaUser />
              </Link>
            </span>
            <span className={styles.header__wrapper__icons}>
              <Link href="#">
                <RiShoppingCart2Fill />
              </Link>
              <span className={styles.header__cart__count}>
                <p>1</p>
              </span>
            </span>
          </div>
        </div>
      </div>
      {isOpen && (
        <SideMenu handleMenuToggle={handleMenuToggle} isOpen={isOpen} />
      )}
    </>
  );
};

export default Header;
