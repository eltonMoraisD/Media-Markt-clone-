"use client";
import styles from "../../../app/signin/styles.module.scss";

import { useState } from "react";
import { Form, Formik } from "formik";
import type { NextPage } from "next";
import * as Yup from "yup";
import Button from "@/components/Button";
import Input from "@/components/Input";

import Link from "next/link";

interface ISignInProps {
  login_email: string;
  login_password: string;
  name: string;
  value: string;
}

export const SignInValidation: NextPage = () => {
  const initialValues: ISignInProps = {
    login_email: "",
    login_password: "",
    value: "",
    name: "",
  };
  const [user, setUser] = useState(initialValues);
  const { login_email, login_password } = user;

  const handleChange = (e: React.FormEvent<HTMLInputElement> | any): void => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("L'adresse électronique est requise")
      .email("Veuillez saisir une adresse e-mail valide"),
    login_password: Yup.string().required("Le mot de passe est nécessaire"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        login_email,
        login_password,
      }}
      validationSchema={loginValidation}
      onSubmit={handleChange}
    >
      {(form) => (
        <Form>
          <h1>Connexion</h1>
          {!form.isValid ? (
            <div className={styles.error__popup}>
              <span>Merci de bien vouloir ajuster les éléments suivants :</span>
              <ul>
                <li>E-mail ou mot de passe incorrect.</li>
              </ul>
            </div>
          ) : (
            ""
          )}
          <label htmlFor="name" className={styles.label}>
            E-mail
          </label>
          <Input handleChange={handleChange} type="email" name="login_email" />

          <label className={styles.label}>Mot de passe</label>
          <Input
            handleChange={handleChange}
            type="password"
            name="login_password"
          />
          <div className={styles.signin__submit}>
            <p>Mot de passe oublie</p>
            <Button text="Se connecter" type="submit" />
            <Link href="/signup">Creer un compte</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};
