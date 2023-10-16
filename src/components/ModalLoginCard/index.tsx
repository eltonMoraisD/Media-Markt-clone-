"use client";
import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button";
import { FaHouseUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GrContact, GrFavorite } from "react-icons/gr";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import { MdEmail, MdLogout } from "react-icons/md";
import { LiaUser, LiaUserSolid } from "react-icons/lia";

interface ILoginModal {
  isAuthCardModalOpen: boolean;
  handleAuthCardModal: (
    event: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>
  ) => void;
}

const ModalLoginCard: React.FC<ILoginModal> = ({
  isAuthCardModalOpen,
  handleAuthCardModal,

}) => {
  const session = useSession()
  const firstName = useSelector(({ stepsReducer }) => stepsReducer.FormFirstName)
  const lastName = useSelector(({ stepsReducer }) => stepsReducer.FormLastName)

  return (
    <>

      {isAuthCardModalOpen && session.status === "unauthenticated" ? (
        <div className={styles.modal}>
          <div className={styles.modal__buttons}>
            <Link onClick={(e) => handleAuthCardModal(e)} href="/signin">
              <Button text="Iniciar sesión" type="button" />
            </Link>
            <Link href="/signup">
              <Button text="Registro" type="button" />
            </Link>
          </div>
          <div className={styles.links}>
            <Link href="">
              <FaHouseUser />
              <span>Mi cuenta</span>
            </Link>
            <Link href={""}>
              <FiShoppingCart />
              <span>Mis pedidos</span>
            </Link>
            <Link href={""}>
              <GrFavorite />
              <span>Mi lista de deseos</span>
            </Link>
          </div>
        </div>
      ) :
        <div className={styles.modal}>
          <div className={styles.user}>
            <span className={styles.user__name}>{firstName} {lastName}</span>
          </div>
          <div className={styles.links}>
            <Link href="">
              <FaHouseUser />
              <span>Mi cuenta</span>
            </Link>
            <Link href={""}>
              <FiShoppingCart />
              <span>Mis pedidos</span>
            </Link>
            <Link href={""}>
              <GrFavorite />
              <span>Mi lista de deseos</span>
            </Link>
            <Link href={""}>
              <GrContact />
              <span>Contacto</span>
            </Link>
            <Link href={""}>
              <MdEmail />
              <span>Newsletter</span>
            </Link>
            <Link href={""}>
              <LiaUserSolid />
              <span>Mi perfil</span>
            </Link>
          </div>
          <div onClick={() => signOut()} className={styles.logout}>
            <MdLogout />
            <span>Cerrar sesión</span>
          </div>
        </div>
      }
    </>
  );
};

export default ModalLoginCard;
