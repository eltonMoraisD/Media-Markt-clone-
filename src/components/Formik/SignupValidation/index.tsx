/* eslint-disable react/no-unescaped-entities */
"use client";
// import styles from "../../../app/signup/styles.module.scss";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Form, Formik } from "formik";
import type { NextPage } from "next";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { formStage } from "../../../redux/stageSlice";
import { ToastContainer, toast } from "react-toastify";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { createUser } from "@/helpers/createUsers";
import Loader from "@/components/Loader";
import RadioButton from "@/components/RadioButton";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import { useDispatch } from "react-redux";

interface ISignUpCustom {
  name: string;
  prenom: string;
  password: string;
  nif: string;
  Sr: string;
  Sra: string;
  SinEspecificar: string;
}

export const SignUpValidation: NextPage = () => {
  const initialValues: ISignUpCustom = {
    prenom: "",
    name: "",
    nif: "",
    password: "",
    Sr: "",
    Sra: "",
    SinEspecificar: "",
  };
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState(initialValues);
  const dispatch = useDispatch();
  const [gender, setGender] = useState<{ [key: string]: any }>({});
  const { Sr, Sra, SinEspecificar } = gender;

  const { nif, name, password, prenom } = user;

  const router = useRouter();

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.isPropagationStopped()) {
      e.stopPropagation();
    }
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });
    setGender({ [name]: value });
  };

  const signUpHandler = async () => {
    setLoading(true);
    console.log("is submit called?");
    dispatch(formStage(1));
    const users = await createUser(prenom, name, nif, password);
    const response = await users.json();

    if (users.ok) {
      setLoading(false);
      return router.push("/");
    } else {
      setLoading(false);
      setUser(initialValues);
      toast.error(response.message);
    }
  };

  const registerValidation = Yup.object({
    name: Yup.string().required("Por favor, añade tu nombre."),
    prenom: Yup.string().required("Por favor, añade tu apelido."),
    nif: Yup.string().required(
      "Por favor, introduce un número de NIF/NIE correcto."
    ),

    password: Yup.string()
      .required(
        "La contraseña no es válida. Por favor inténtalo de nuevo Seguridad de la contraseña: Baja"
      )
      .min(8, "al menos 8 caracteres")
      .max(36, "Le mot de passe ne doit pas comporter plus de 36 caractères"),

    Sr: Yup.string().required("Por favor, selecciona una opción."),
    Sra: Yup.string().required("Por favor, selecciona una opción."),
    SinEspecificar: Yup.string().required("Por favor, selecciona una opción."),
  });

  return (
    <>
      {loading && <Loader loading={loading} />}
      <Formik
        enableReinitialize={true}
        initialValues={{
          nif,
          name,
          password,
          prenom,
          Sr,
          Sra,
          SinEspecificar,
        }}
        validationSchema={registerValidation}
        onSubmit={signUpHandler}
      >
        {(form) => (
          <>
            <Form>
              <div className={styles.radio}>
                <div className={styles.radio__group}>
                  <RadioButton
                    id="1"
                    checked={Sr}
                    type="radio"
                    name="Sr"
                    label="Sr"
                    value="Sr"
                    handleChange={handleChange}
                  />
                  <RadioButton
                    id="2"
                    checked={Sra}
                    type="radio"
                    name="Sra"
                    label="Sra"
                    value="Sra"
                    handleChange={handleChange}
                  />
                  <RadioButton
                    id="3"
                    checked={SinEspecificar}
                    type="radio"
                    name="SinEspecificar"
                    label="Sin especificar"
                    value="Sin especificar"
                    handleChange={handleChange}
                  />
                </div>
              </div>
              {form.errors.Sr &&
              form.errors.Sra &&
              form.errors.SinEspecificar &&
              form.touched.Sr &&
              form.touched.Sra &&
              form.touched.SinEspecificar ? (
                <span className={styles.error__message}>
                  <p>Por favor, selecciona una opción.</p>
                </span>
              ) : null}

              <Input
                handleChange={handleChange}
                type="text"
                name="name"
                label="Nombre"
                value={name}
              />

              <Input
                handleChange={handleChange}
                type="text"
                name="prenom"
                label="Apelido"
                value={prenom}
              />

              <Input
                handleChange={handleChange}
                type="text"
                name="nif"
                label="NIF/NIE"
                value={nif}
              />

              <Input
                handleChange={handleChange}
                type="password"
                name="password"
                label="Contraseña"
                value={password}
              />
              <Newsletter
                title="Apúntate a la experiencia MediaMarkt y recibe las mejores ofertas"
                text="¡Regístrate para recibir nuestra newsletter y beneficiarte de
            ofertas exclusivas!*"
                subtitle="Acepto que recibiré información sobre productos y servicios, ofertas
            interesantes y promociones actuales del Grupo MediaMarkt que se
            adapten a mis intereses por correo electrónico y que mis datos
            personales se procesarán para el envío de correos electrónicos. Más
            información."
              />
              <p className={styles.policy}>
                Al hacer click en "Regístrate ya" declaras que has leído y
                aceptas el tratamiento de tus datos conforme se describe en la
                <Link className={styles.policy__links} href={""}>
                  Política de Privacidad
                </Link>{" "}
                y los
                <Link className={styles.policy__links} href={""}>
                  Términos y Condiciones .
                </Link>
              </p>
              <div className={styles.signup}>
                <Button text="Regístrate ya" type="submit" />
              </div>
            </Form>
          </>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};
