"use client";
import styles from "./styles.module.scss";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { useParams, useRouter } from "next/navigation";

import Input from "@/components/Input";
import Button from "@/components/Button";
import { resetPassword } from "@/helpers/resetPassword";
import HeadAuths from "@/components/HeadAuths";

const Reset: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [conf_password, setConf_password] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(false)
  const params = useParams();
  const Router = useRouter();

  const { token } = params;

  const passwordValidation = Yup.object({
    password: Yup.string()
      .required("Por favor, introduce tu contraseña")
      .min(8, "al menos 8 caracteres."),
    conf_password: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "La nueva contraseña no coincide"),
  });

  const resetHandler = async () => {
    setLoading(true)
    const response = await resetPassword(token, password);
    if (response.ok) {
      setLoading(false)
      Router.push("/signin");
    }
  };
  return (
    <>
      <HeadAuths />
      <div className={styles.container}>
        <div className={styles.container__all}>
          <div className={styles.container__all__group}>
            <h1 className={styles.title}>
              Crear una nueva contraseña
            </h1>
            <p>Añade tu nueva contraseña dos veces. Envía y se iniciará sesión automáticamente.</p>

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
                  <Input
                    label="Nueva contraseña"
                    name="password"
                    type="password"
                    value={password}
                    handleChange={(e: React.FormEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)} />
                  <Input
                    label="Repita la nueva contraseña"
                    name="conf_password"
                    type="password"
                    value={conf_password}
                    handleChange={(e: React.FormEvent<HTMLInputElement>) => setConf_password(e.currentTarget.value)} />
                  <Button loading={isLoading} text="Restablecer contraseña" type="submit" />
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
