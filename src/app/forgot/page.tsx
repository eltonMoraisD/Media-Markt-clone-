"use client";
import styles from "./styles.module.scss";

import { Form, Formik } from "formik";
import Link from "next/link";
import { useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { IoIosArrowForward } from "react-icons/io";

import Button from "@/components/Button";
import Input from "@/components/Input";
import MailboxSucess from "@/components/MailboxSucess"
import { forgotPassword } from "@/helpers/forgotPassword";
import HeadAuths from "@/components/HeadAuths";
import { formEmailForgot } from "../../redux/reducers/forgotSlice"
import { useSelector } from "react-redux";

interface IRecoveryProps {
  recovery_email: string;
}

export default function Forgot(): JSX.Element {
  const initialValues: IRecoveryProps = {
    recovery_email: "",
  };
  const [email, setEmail] = useState(initialValues);
  const [loading, setLoading] = useState<boolean>(false);
  const [isEmailSend, setEmailSend] = useState<boolean>(false)

  const userEmail = useSelector(({ forgotReducer }) => forgotReducer.FormEmailForgot)
  const dispatch = useDispatch()

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
      dispatch(formEmailForgot(recovery_email))
      setEmailSend(true)
      toast.success(response.message);
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <>
      <HeadAuths />
      <div className={styles.container}>

        <div className={styles.container__all}>
          <div className={styles.container__all__group}>
            {!isEmailSend ? <>
              <h1 className={styles.title}>¿Olvidaste tu contraseña?</h1>
              <p>
                Introduce la dirección de correo electrónico que utilizaste para registrarse en MediaMarkt.
                Te enviaremos un enlace para restablecer tu contraseña.
              </p>

              <Formik
                initialValues={{ recovery_email }}
                enableReinitialize={true}
                validationSchema={emailSchemaValidation}
                onSubmit={handleForgot}
              >
                {(form) => (
                  <Form method="post">
                    <Input
                      label="Correo electrónico"
                      name="recovery_email"
                      type="email"
                      handleChange={handleChange} value={recovery_email} />
                    <div className={styles.btLinks}>
                      <Button loading={loading} text="Restablecer contraseña" type="submit" />
                      <div className={styles.btLinks__link}>
                        <IoIosArrowForward />
                        <Link href="/signin">Volver al inicio de sesión</Link>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
              <ToastContainer />
            </> :
              <MailboxSucess email={userEmail} />

            }

          </div>
        </div>
      </div>
    </>
  );
}
