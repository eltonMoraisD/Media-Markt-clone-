"use client";
import { Form, Formik } from "formik";
import styles from "./styles.module.scss";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { FormEvent } from "react";

const Reset: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__all}>
        <div className={styles.container__all__group}>
          <h1 className={styles.title}>
            Réinitialiser le mot de passe du compte
          </h1>
          <p>Entrer un nouveau mot de passe pour studiomagic233@gmail.com</p>

          <Formik
            enableReinitialize={true}
            onSubmit={() => console.log("submit not implemented")}
            initialValues={{}}
          >
            {(form) => (
              <Form method="post">
                <label htmlFor="name">Mot de passe</label>
                <Input
                  name="password"
                  type="password"
                  handleChange={function (
                    e: FormEvent<HTMLInputElement>
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
                />
                <label htmlFor="name">Confirmer le mot de passe</label>
                <Input
                  name="confirm_password"
                  type="password"
                  handleChange={function (
                    e: FormEvent<HTMLInputElement>
                  ): void {
                    throw new Error("Function not implemented.");
                  }}
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
