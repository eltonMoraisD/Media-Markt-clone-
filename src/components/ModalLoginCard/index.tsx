"use client";
import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button";
import { FaHouseUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { GrFavorite } from "react-icons/gr";
import Link from "next/link";

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
  return (
    <>
      {isAuthCardModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modal__buttons}>
            <Link onClick={(e) => handleAuthCardModal(e)} href="/signin">
              <Button text="Iniciar sesión" type="button" />
            </Link>
            <Link href={""}>
              <Button text="Registro" type={"button"} />
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
      )}
    </>
  );
};

export default ModalLoginCard;
