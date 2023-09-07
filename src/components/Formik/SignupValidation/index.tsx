"use client";
import styles from "../../../app/signup/styles.module.scss";

import { useState } from "react";
import { Form, Formik, useField, useFormikContext } from "formik";
import type { NextPage } from "next";
import * as Yup from "yup";
import Button from "@/components/Button";
import Input from "@/components/Input";

interface ISignUpCustom {
  prenom: string;
  name: string;
  email: string;
  password: string;
}

export const SignUpValidation: NextPage = () => {
  const initialValues: ISignUpCustom = {
    prenom: "",
    name: "",
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialValues);
  const { email, name, password, prenom } = user;

  const handleChange = (e: React.FormEvent<HTMLInputElement> | any): void => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const registerValidation = Yup.object({
    email: Yup.string()
      .required("E-mail ne peut pas rester vide")
      .email("Enter a valid email address."),
    password: Yup.string()
      .required("Mot de passe ne peut pas rester vide.")
      .min(6, "Le mot de passe doit comporter au moins 6 caractères.")
      .max(36, "Le mot de passe ne doit pas comporter plus de 36 caractères"),
  });

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{
        email,
        name,
        password,
        prenom,
      }}
      validationSchema={registerValidation}
      onSubmit={handleChange}
    >
      {(form) => (
        <Form>
          <h1>Créer un compte</h1>
          {!form.isValid ? (
            <div className={styles.error__popup}>
              <span>Merci de bien vouloir ajuster les éléments suivants :</span>

              <ul>
                {form.errors.email ? <li>{form.errors.email}</li> : ""}
                {form.errors.password ? <li>{form.errors.password}</li> : ""}
              </ul>
            </div>
          ) : (
            ""
          )}
          <label htmlFor="name" className={styles.label}>
            Prénom
          </label>
          <Input handleChange={handleChange} type="text" name="name" />

          <label htmlFor="name" className={styles.label}>
            Nom de famille
          </label>
          <Input handleChange={handleChange} type="text" name="prenom" />

          <label htmlFor="name" className={styles.label}>
            Adresse e-mail
          </label>
          <Input handleChange={handleChange} type="email" name="email" />

          <label htmlFor="name" className={styles.label}>
            Mot de passe
          </label>
          <Input handleChange={handleChange} type="password" name="password" />
          <div className={styles.signup__submit}>
            <Button text="Créer" type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
};
