"use client";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

import { GiHamburgerMenu } from "react-icons/gi";

import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdExpandLess } from "react-icons/md";

import { FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";

import { useEffect, useState } from "react";
import SideMenu from "../SideMenu";
import Blur from "../Blur";
import SideSearch from "../SideSearch";
import Search from "../Search";
import ModalLoginCard from "../ModalLoginCard";
import Top from "../Top";

const Header: React.FunctionComponent = () => {
  const [isOpen, setMenuOpen] = useState(false);
  const [isSideSearchOpen, setSideSearchOpen] = useState(false);
  const [isAuthCardModalOpen, setAuthCardModal] = useState(false);

  useEffect(() => {
    //prevent body scroll
    document.body.style.overflow = isSideSearchOpen ? "hidden" : "unset";
  }, [isSideSearchOpen]);

  const handleMenuToggle = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.stopPropagation();
    setMenuOpen(!isOpen);
  };

  const handleSideSearchToggle = (
    event: React.MouseEvent<HTMLElement>
  ): void => {
    event.stopPropagation();
    setSideSearchOpen(!isSideSearchOpen);
  };

  const handleAuthCardModal = (
    event: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>
  ): void => {
    event.stopPropagation();
    setAuthCardModal(!isAuthCardModalOpen);
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.header__top}>
          <Link href="#">Ofertas</Link>
          <Link href="#">Subscribete</Link>
          <Link href="#">★ Servicios</Link>
          <Link href="#">Empresas</Link>
          <Link href="#">Web Canarias</Link>
          <Link href="#">Instalación placas solares</Link>
          <Link href="#">Reparaciones</Link>
          <Link href="#">Financiación</Link>
          <Link href="#">Betterway</Link>
          <Link href="#">Valora y Gana</Link>
          <Link href="#">Marcas proprias</Link>
          <Link href="#">¿Te ayudamos?</Link>
          <Link href="#">Formaciones</Link>
          <Link href="#">Mejor precio garantizado</Link>
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
            <GiHamburgerMenu /> <span>Todas las categorías</span>
          </button>
          <Search />

          <div
            className={styles.rigth}
            onClick={(e) => handleSideSearchToggle(e)}
          >
            <div className={styles.rigth__container}>
              <h3>Mi tienda</h3>
              <p>No has seleccionado...</p>
            </div>
            <span className={styles.rigth__arrow}>
              <MdExpandLess />
            </span>
          </div>

          <div className={styles.header__wrapper}>
            <div
              onClick={(e) => handleAuthCardModal(e)}
              className={styles.userIcon}
            >
              <span className={styles.header__wrapper__icons}>
                <FaUser />
              </span>
            </div>
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
        {/* here*/}
        {/* <Top /> */}
      </header>
      {isOpen && (
        <>
          <SideMenu handleMenuToggle={handleMenuToggle} isOpen={isOpen} />
          <Blur handleMenuToggle={handleMenuToggle} />
        </>
      )}

      {isSideSearchOpen && (
        <>
          <Blur handleSideSearchToggle={handleSideSearchToggle} />
          <SideSearch handleSideSearchToggle={handleSideSearchToggle} />
        </>
      )}

      {isAuthCardModalOpen && (
        <ModalLoginCard
          isAuthCardModalOpen={isAuthCardModalOpen}
          handleAuthCardModal={handleAuthCardModal}
        />
      )}
    </>
  );
};

export default Header;
