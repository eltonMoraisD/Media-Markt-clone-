"use client";
import styles from "./styles.module.scss";

import { Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { forgotPassword } from "@/helpers/forgotPassword";
import Loader from "@/components/Loader";
import { toast, ToastContainer } from "react-toastify";

interface IRecoveryProps {
  recovery_email: string;
}

export default function Forgot() {
  const initialValues: IRecoveryProps = {
    recovery_email: "",
  };
  const [email, setEmail] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const { recovery_email } = email;

  const emailSchemaValidation = Yup.object({
    recovery_email: Yup.string()
      .required("Aucun compte associé à cet e-mail n'a été trouvé.")
      .email("Veuillez saisir une adresse e-mail valide."),
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setEmail({ ...email, [name]: value });
  };

  const handleForgot = async (): Promise<void> => {
    try {
      setLoading(true);
      const data = await forgotPassword(recovery_email); //api call
      const response = await data.json();

      if (!data.ok) {
        setLoading(false);
        toast.error(response.message);
        return;
      }
      setLoading(false);
      setEmail(initialValues);
      toast.success(response.message);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <>
      <div className={styles.container}>
        {loading && <Loader loading={loading} />}
        <div className={styles.container__all}>
          <div className={styles.container__all__group}>
            <h1 className={styles.title}>Réinitialiser votre mot de passe</h1>
            <p>
              Nous vous enverrons un e-mail pour réinitialiser votre mot de
              passe.
            </p>

            <Formik
              initialValues={{ recovery_email }}
              enableReinitialize={true}
              validationSchema={emailSchemaValidation}
              onSubmit={handleForgot}
            >
              {(form) => (
                <Form method="post">
                  <label htmlFor="name">E-mail</label>
                  <Input
                    name="recovery_email"
                    type="email"
                    handleChange={handleChange}
                  />
                  <div className={styles.center}>
                    <Button text="Soumettre" type="submit" />
                    <Link href="/signin">Annuler</Link>
                  </div>
                </Form>
              )}
            </Formik>
            <ToastContainer />
          </div>
        </div>
      </div>
    </>
  );
}
