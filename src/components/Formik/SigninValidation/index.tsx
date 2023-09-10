/* eslint-disable react/no-unescaped-entities */
"use client";
import styles from "../../../app/signin/styles.module.scss";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";
import Input from "@/components/Input";

import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/Loader";
import { ToastContainer, toast } from "react-toastify";
import UserSettings from "@/components/AccountDetails";

interface ISignInProps {
  login_email: string;
  login_password: string;
  name: string;
  value: string;
  login_error: string;
}

export const SignInValidation = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data: session } = useSession();
  // console.log("session", session);

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

  const handleChange = (e: React.FormEvent<HTMLInputElement> | any): void => {
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
      .required("L'adresse électronique est requise")
      .email("Veuillez saisir une adresse e-mail valide"),
    login_password: Yup.string().required("Le mot de passe est nécessaire"),
  });

  return (
    <>
      {session ? (
        <UserSettings />
      ) : (
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
              <Form>
                <h1 className={styles.title}>Connexion</h1>
                {!form.isValid ? (
                  <div className={styles.error__popup}>
                    <span>
                      Merci de bien vouloir ajuster les éléments suivants :
                    </span>
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
                <Input
                  handleChange={handleChange}
                  type="email"
                  name="login_email"
                />

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
          {children}
          <ToastContainer />

          {loading && <Loader loading={loading} />}
        </div>
      )}
    </>
  );
};
