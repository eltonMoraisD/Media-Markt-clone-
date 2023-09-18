/* eslint-disable react/no-unescaped-entities */
"use-client";
import styles from "./styles.module.scss";
import React from "react";
import Button from "../Button";
import { signOut } from "next-auth/react";

const AccountDetails = () => {
  const logout = async () => {
    await signOut();
    window.location.href = "/"; //this could be improved
  };
  return (
    <div className={styles.container}>
      <div className={styles.container__group}>
        <div className={styles.title}>
          <h1>Mon compte</h1>
          <p onClick={() => logout()}>Se deconnecter</p>
        </div>
        <div className={styles.details}>
          <div className={styles.details__history}>
            <h1>Historique des commandes</h1>
            <p>Vous n'avez placé aucune commande.</p>
          </div>
          <div className={styles.details__account}>
            <h1>Détails du compte</h1>
            <Button text="Voir les adresses(0)" type="button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
