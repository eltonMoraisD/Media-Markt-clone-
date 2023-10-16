"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Form, Formik } from "formik";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import styles from "./styles.module.scss";

import {
  IoIosArrowForward
} from "react-icons/io";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";

interface ISignInProps {
  login_email: string;
  login_password: string;
  name: string;
  value: string;
  login_error: string;
}

export const SignInValidation = ({ csrfToken }: { csrfToken: string }) => {
  // const { data: session } = useSession();

  const initialValues: ISignInProps = {
    login_email: "",
    login_password: "",
    value: "",
    name: "",
    login_error: "",
  };
  const [user, setUser] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const { login_email, login_password } = user;

  const router = useRouter();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const signInHandler = async () => {
    setLoading(true);
    const options = {
      redirect: false,
      email: login_email,
      password: login_password,
    };

    const res = await signIn("credentials", options);
    setLoading(false);

    if (res?.error) {
      setLoading(false);
      setUser({ ...user, login_error: res?.error });
      toast.error(res?.error);
    } else {
      return router.push("/");
    }
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Por favor, añade un correo electrónico válido.")
      .email("Formato de correo electrónico inválido"),
    login_password: Yup.string().required(
      "Por favor, introduce una contraseña."
    ),
  });

  return (
    <>

      <div className={styles.container}>
        <Formik
          enableReinitialize={true}
          initialValues={{
            login_email,
            login_password,
          }}
          validationSchema={loginValidation}
          onSubmit={signInHandler}
        >
          {(form) => (
            <Form method="post" action="/api/auth/signin/email">
              <div className={styles.wrapper}>
                <h1 className={styles.title}>¿Ya estás registrado?</h1>
                <p className={styles.subtitle}>
                  Inicia sesión ahora para aprovecharte de todos los
                  beneficios de la cuenta de cliente de MediaMarkt. ¿Nuevo
                  cliente?
                  <Link href="/signup">Al registro</Link>
                </p>

                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />

                <Input
                  value={login_email}
                  handleChange={handleChange}
                  type="email"
                  name="login_email"
                  label="Correo eletrónico"
                />

                <Input
                  value={login_password}
                  handleChange={handleChange}
                  type="password"
                  name="login_password"
                  label="Contraseña"
                />
                <div className={styles.signin__submit}>
                  <Link className={styles.btn_link} href="/forgot">
                    <IoIosArrowForward />
                    ¿Olvidaste tu contraseña?
                  </Link>
                  <Button loading={loading} text="Iniciar sesión" type="submit" />
                </div>
              </div>
            </Form>
          )}
        </Formik>

        <ToastContainer />

      </div>

    </>
  );
};
