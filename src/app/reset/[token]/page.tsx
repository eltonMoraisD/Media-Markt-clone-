"use client";
import React from "react";
import styles from "./styles.module.scss";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { resetPassword } from "@/helpers/resetPassword";

const Reset: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [conf_password, setConf_password] = useState<string>("");
  const params = useParams();
  const Router = useRouter();
  const { token } = params;

  const passwordValidation = Yup.object({
    password: Yup.string()
      .required("Please enter your password")
      .min(6, "Password must be atleast 6 characters."),
    conf_password: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Passwords must match."),
  });

  const resetHandler = async () => {
    const response = await resetPassword(token, password);
    if (response.ok) {
      Router.push("/signin");
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.container__all}>
        <div className={styles.container__all__group}>
          <h1 className={styles.title}>
            Réinitialiser le mot de passe du compte
          </h1>
          <p>Entrer un nouveau mot de passe pour email</p>

          <Formik
            enableReinitialize={true}
            onSubmit={resetHandler}
            initialValues={{
              password,
              conf_password,
            }}
            validationSchema={passwordValidation}
          >
            {(form) => (
              <Form method="post">
                <label htmlFor="name">Mot de passe</label>
                <Input
                  name="password"
                  type="password"
                  handleChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setPassword(e.currentTarget.value)
                  }
                />
                <label htmlFor="name">Confirmer le mot de passe</label>
                <Input
                  name="conf_password"
                  type="password"
                  handleChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setConf_password(e.currentTarget.value)
                  }
                />
                <Button text="Réinitialiser le mot de passe" type="submit" />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Reset;
