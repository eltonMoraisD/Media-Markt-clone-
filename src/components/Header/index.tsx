"use client";
import styles from "./styles.module.scss";

import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdExpandLess } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";

import logo from "../../assets/logo.png";
import SideMenu from "../SideMenu";
import Blur from "../Blur";
import SideSearch from "../SideSearch";
import Search from "../Search";
import ModalLoginCard from "../ModalLoginCard";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";

const Header: React.FunctionComponent = () => {
  const [isOpen, setMenuOpen] = useState<boolean>(false);
  const [isSideSearchOpen, setSideSearchOpen] = useState<boolean>(false);
  const [isAuthCardModalOpen, setAuthCardModal] = useState<boolean>(false);
  const session = useSession()
  const firstName = useSelector(({ stepsReducer }) => stepsReducer.FormFirstName)
  const lastName = useSelector(({ stepsReducer }) => stepsReducer.FormLastName)


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

  const firstAndSecondLetter = (): string => {
    const first = firstName.split(" ")
    const last = lastName.split(" ")
    const firstLetter = Array.from(first).map((word: any) => word.charAt(0))
    const secondLetter = Array.from(last).map((word: any) => word.charAt(0))

    return firstLetter.join(" ").toUpperCase().concat(secondLetter.join(" ").toUpperCase())
  }
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
            className={styles.header__menu}
            onClick={(e) => handleMenuToggle(e)}
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
          {/* icons */}
          <div className={styles.header__wrapper}>
            <div
              onClick={(e) => handleAuthCardModal(e)}
              className={styles.userIcon}
            >
              <span className={styles.header__wrapper__icons}>
                {
                  session.status === "unauthenticated" ?
                    <FaUser />
                    :
                    <span>
                      {firstAndSecondLetter()}
                    </span>
                }

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
