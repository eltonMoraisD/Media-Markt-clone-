"use client";
import Button from "@/components/Button";
import styles from "./styles.module.scss";
import Input from "@/components/Input";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {formStage,formEmail} from "../../../redux/stageSlice"

import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch,useSelector } from "react-redux";

interface ISignInProps {
  login_email: string;
  name: string;
  value: string;
}

export const FirstStepAuthValidation = () => {
  // const { data: session } = useSession();

  const initialValues: ISignInProps = {
    login_email: "",

    value: "",
    name: "",

  };
  const [user, setUser] = useState(initialValues);
  const [loading, setLoading] = useState(false);
  const { login_email } = user;


  const router = useRouter();
  const dispach = useDispatch()

  
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
  };

  const sendCode = async () => {
    dispach(formStage(2))//update the steps
    dispach(formEmail(login_email))
    

    // if (res?.error) {
    //   setLoading(false);
    //   setUser({ ...user, login_error: res?.error });
    //   toast.error(res?.error);
    // } else {
    //   return router.push("/");
    // }
  };

  const loginValidation = Yup.object({
    login_email: Yup.string()
      .required("Por favor, añade un correo electrónico válido.")
      .email("Formato de correo electrónico inválido"),

  });

  return (
    <>
      <div className={styles.container}>
        <p className={styles.container__title}>
          Crea tu cuenta aquí. ¿Ya tienes una cuenta?
          <Link href="/signin">Inicia sesión</Link>
        </p>
        <Formik
          enableReinitialize={true}
          initialValues={{
            login_email,

          }}
          validationSchema={loginValidation}
          onSubmit={sendCode}
        >
          {(form) => (
            <Form method="post" action="/api/auth/signin/email">
              <div className={styles.wrapper}>
                <Input
                  value={login_email}
                  handleChange={handleChange}
                  type="email"
                  name="login_email"
                  label="Correo eletrónico"
                />
                <div className={styles.wrapper__submit}>
                  <Button text="Enviar código" type="submit" />
                </div>
              </div>
            </Form>
          )}
        </Formik>

        {loading && <Loader loading={loading} />}
      </div>

    </>
  );
};
