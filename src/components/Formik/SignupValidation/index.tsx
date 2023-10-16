/* eslint-disable react/no-unescaped-entities */
"use client";
// import styles from "../../../app/signup/styles.module.scss";
import styles from "./styles.module.scss";
import { useRef, useState } from "react";
import { Form, Formik } from "formik";
import type { NextPage } from "next";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { formStage, formFirstName, formLastName } from "../../../redux/reducers/stageSlice";
import { ToastContainer, toast } from "react-toastify";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { createUserClient, createUserCompany } from "@/helpers/createUsers";
import RadioButton from "@/components/RadioButton";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signIn } from "next-auth/react";

interface ISignUpCustom {
  name: string;
  prenom: string;
  password: string;
  nif: string;
  companyName: string;
  cif: string

}

export const SignUpValidation: NextPage<{ role: string }> = ({ role }) => {
  const initialValues: ISignUpCustom = {
    prenom: "",
    name: "",
    nif: "",
    password: "",
    companyName: "",
    cif: "",

  };
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState(initialValues);
  const [gender, setGender] = useState<string>("");
  const { nif, name, password, prenom, companyName, cif } = user;

  const dispatch = useDispatch();
  const email = useSelector(({ stepsReducer }) => stepsReducer.FormEmail)
  const router = useRouter();

  const handleInputs = (e: React.FormEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.isPropagationStopped()) {
      e.stopPropagation();
    }
    const { name, value } = e.currentTarget;
    setUser({ ...user, [name]: value });

  };

  const handleRadioInputs = (e: React.FormEvent<HTMLInputElement>) => {
    e.stopPropagation();
    if (e.isPropagationStopped()) {
      e.stopPropagation();
    }
    const { name } = e.currentTarget;

    setGender(name);
  }

  //this will automatic signin user after register
  const signInUser = async () => {
    const options = {
      redirect: false,
      email: email,
      password: password,
    };

    await signIn("credentials", options);
  }
  const signUpHandler = async () => {
    setLoading(true);

    if (role === "client") {

      const users = await createUserClient(gender, name, prenom, email, nif, password, role);
      const response = await users.json();

      if (users.ok) {
        dispatch(formStage(1));
        dispatch(formFirstName(name))
        dispatch(formLastName(prenom))
        setLoading(false);

        signInUser()// automatic login user after create user 

        return router.push("/registerSuccess");
      } else {
        setLoading(false);
        setUser(initialValues);
        toast.error(response.message);
      }
    } else if (role === "company") {

      const users = await createUserCompany(gender, name, prenom, email, companyName, cif, password, role);
      const response = await users.json();

      if (users.ok) {

        signInUser()// automatic login user after create user 
        dispatch(formStage(1));
        setLoading(false);
        return router.push("/");

      } else {
        setLoading(false);
        setUser(initialValues);
        toast.error(response.message);
      }
    }

  };

  const registerValidationClient = Yup.object({
    name: Yup.string().required("Por favor, añade tu nombre."),
    prenom: Yup.string().required("Por favor, añade tu apelido."),
    nif: Yup.string().required("Por favor, introduce un número de NIF/NIE correcto."),
    password: Yup.string()
      .required(
        "La contraseña no es válida. Por favor inténtalo de nuevo Seguridad de la contraseña: Baja"
      )
      .min(8, "al menos 8 caracteres")
      .max(36, "Le mot de passe ne doit pas comporter plus de 36 caractères"),
    gender: Yup.string().required("Por favor, selecciona una opción."),

  });

  const registerValidationCompany = Yup.object({
    name: Yup.string().required("Por favor, añade tu nombre."),
    prenom: Yup.string().required("Por favor, añade tu apelido."),
    password: Yup.string()
      .required(
        "La contraseña no es válida. Por favor inténtalo de nuevo Seguridad de la contraseña: Baja"
      )
      .min(8, "al menos 8 caracteres")
      .max(36, "Le mot de passe ne doit pas comporter plus de 36 caractères"),
    gender: Yup.string().required("Por favor, selecciona una opción."),
    companyName: Yup.string().required("Por favor, añade un nombre de empresa"),
    cif: Yup.string().required("Por favor, introduce un número de CIF correcto."),

  })

  return (
    <>

      <Formik
        enableReinitialize={true}
        initialValues={{
          nif,
          name,
          password,
          prenom,
          gender,
          companyName,
          cif
        }}

        validationSchema={role === "client" ? registerValidationClient : registerValidationCompany}
        onSubmit={signUpHandler}
      >
        {(form) => (
          <>
            <Form>
              <div className={styles.radio}>
                <div className={styles.radio__group}>
                  <RadioButton
                    id="1"
                    checked={gender === "Sr"}
                    type="radio"
                    name="Sr"
                    label="Sr"
                    value={gender}
                    handleChange={handleRadioInputs}
                  />
                  <RadioButton
                    id="2"
                    checked={gender === "Sra"}
                    type="radio"
                    name="Sra"
                    label="Sra"
                    value={gender}
                    handleChange={handleRadioInputs}
                  />
                  <RadioButton
                    id="3"
                    checked={gender === "SinEspecificar"}
                    type="radio"
                    name="SinEspecificar"
                    label="Sin especificar"
                    value={gender}
                    handleChange={handleRadioInputs}
                  />
                </div>
              </div>
              {form.errors.gender &&
                form.touched.gender &&
                form.touched.gender ? (
                <span className={styles.error__message}>
                  <p>Por favor, selecciona una opción.</p>
                </span>
              ) : null}

              <Input
                handleChange={handleInputs}
                type="text"
                name="name"
                label="Nombre"
                value={name}
              />

              <Input
                handleChange={handleInputs}
                type="text"
                name="prenom"
                label="Apelido"
                value={prenom}
              />
              {
                role === "client" ?
                  <Input
                    handleChange={handleInputs}
                    type="text"
                    name="nif"
                    label="NIF/NIE"
                    value={nif}
                  />
                  :
                  <div className={styles.rolesInputs}>
                    <div className={styles.rolesInputs__left}>
                      <Input
                        handleChange={handleInputs}
                        type="text"
                        name="companyName"
                        label="Empresa"
                        value={companyName}
                      />
                    </div>
                    <div className={styles.rolesInputs__right}>
                      <Input
                        handleChange={handleInputs}
                        type="text"
                        name="cif"
                        label="CIF"
                        value={cif}
                      />

                    </div>
                  </div>
              }


              <Input
                handleChange={handleInputs}
                type="password"
                name="password"
                label="Contraseña"
                value={password}
              />
              {role === "client" && <Newsletter
                title="Apúntate a la experiencia MediaMarkt y recibe las mejores ofertas"
                text="¡Regístrate para recibir nuestra newsletter y beneficiarte de
                         ofertas exclusivas!*"
                subtitle="Acepto que recibiré información sobre productos y servicios, ofertas
                    interesantes y promociones actuales del Grupo MediaMarkt que se
                    adapten a mis intereses por correo electrónico y que mis datos
                    personales se procesarán para el envío de correos electrónicos. Más
                    información."
              />}
              <p className={styles.policy}>
                Al hacer click en "Regístrate ya" declaras que has leído y
                aceptas el tratamiento de tus datos conforme se describe en la
                <Link className={styles.policy__links} href={""}>
                  Política de Privacidad
                </Link>
                y los
                <Link className={styles.policy__links} href={""}>
                  Términos y Condiciones .
                </Link>
              </p>
              <div className={styles.signup}>
                <Button loading={loading} text="Regístrate ya" type="submit" />
              </div>
            </Form>
          </>
        )}
      </Formik>
      <ToastContainer />
    </>
  );
};
