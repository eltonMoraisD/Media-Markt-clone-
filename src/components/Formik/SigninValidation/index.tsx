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
import AccountDetails from "@/components/AccountDetails";

interface ISignInProps {
  login_email: string;
  login_password: string;
  name: string;
  value: string;
  login_error: string;
}

export const SignInValidation = ({
  children,
  csrfToken,
}: {
  children: React.ReactNode;
  csrfToken: string;
}) => {
  const { data: session } = useSession();

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
      .required("L'adresse électronique est requise")
      .email("Veuillez saisir une adresse e-mail valide"),
    login_password: Yup.string().required("Le mot de passe est nécessaire"),
  });

  return (
    <>
      {session ? (
        <AccountDetails />
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
              <Form method="post" action="/api/auth/signin/email">
                <h1 className={styles.title}>Connexion</h1>
                {!form.isValid && (
                  <div className={styles.error__popup}>
                    <span>
                      Merci de bien vouloir ajuster les éléments suivants :
                    </span>
                    <ul>
                      <li>E-mail ou mot de passe incorrect.</li>
                    </ul>
                  </div>
                )}
                <input
                  name="csrfToken"
                  type="hidden"
                  defaultValue={csrfToken}
                />
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
                  <Link className={styles.btn_link} href="/forgot">
                    Mot de passe oublié ?
                  </Link>
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
