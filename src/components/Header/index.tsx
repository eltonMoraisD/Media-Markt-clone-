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
import Blur from "../Blur";

interface IAppProps {}

const Header: React.FunctionComponent<IAppProps> = () => {
  const [isOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    setMenuOpen(!isOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__top}>
          <Link href="#">Notre selection d’articles en promotion</Link>
          <Link href="#">Business Solutions</Link>
          <Link href="#">Services</Link> <Link href="#">Actions Enoprimes</Link>
        </nav>
        <div className={styles.header__main}>
          <Link href="/">
            <Image
              width={200}
              height={100}
              priority={true}
              className={styles.header__main__logo}
              src={logo}
              alt="logo"
            />
          </Link>
          <button
            onClick={(e) => handleMenuToggle(e)}
            className={styles.header__menu}
          >
            <GiHamburgerMenu /> <span>Nos categories</span>
          </button>

          <form action="" className={styles.header__search}>
            <button className={styles.header__search__btn}>
              <RiSearch2Line />
            </button>
            <input type="text" placeholder="Rechercer" />
          </form>
          <div className={styles.header__wrapper}>
            <Link href="/signin">
              <span className={styles.header__wrapper__icons}>
                <FaUser />
              </span>
            </Link>
            <Link href="#">
              <span className={styles.header__wrapper__icons}>
                <RiShoppingCart2Fill />
                <span className={styles.header__cart__count}>
                  <p>1</p>
                </span>
              </span>
            </Link>
          </div>
        </div>
      </header>
      {isOpen && (
        <>
          <SideMenu handleMenuToggle={handleMenuToggle} isOpen={isOpen} />
          <Blur handleMenuToggle={handleMenuToggle} />
        </>
      )}
    </>
  );
};

export default Header;
