"use client";
import { useDispatch, useSelector } from "react-redux";
import OTPInput, { AllowedInputTypes } from "react-otp-input";

import Button from "@/components/Button";
import styles from "./styles.module.scss";

import { Form, Formik } from "formik";
import {
  memo,
  useState,
  useCallback,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import * as Yup from "yup";
import { formStage } from "../../../redux/stageSlice";

import Loader from "@/components/Loader";
import { useRouter } from "next/navigation";

interface IOtpProps {}

export const OtpCodeValidation = (props: IOtpProps): JSX.Element => {
  // const { data: session } = useSession();
  const userEmail = useSelector(({ stepsReducer }) => stepsReducer.FormEmail);
  const [error, setError] = useState(false);
  const [OTP, setOTP] = useState("");

  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispach = useDispatch();

  const sendCode = async () => {
    console.log("sendcode called");
    if (OTP.length < 6) {
      setError(true);
    } else {
      setError(false);
    }
    dispach(formStage(3)); //update the steps
  };

  const handleChange = (OTP: string) => {
    setError(false);
    setOTP(OTP);
  };

  return (
    <>
      <div className={styles.container}>
        <Formik
          enableReinitialize={true}
          initialValues={{}}
          // validationSchema={otpValidationSchema}
          onSubmit={sendCode}
        >
          {(form) => (
            <Form>
              <p className={styles.title}>
                Comprueba tu buzón de correo. Introduce el código de
                verificación de 6 dígitos enviado a {userEmail}, este caducará
                en 60 minutos.{" "}
                <span
                  className={styles.title__link}
                  onClick={() => dispach(formStage(1))}
                >
                  Cambiar correo electrónico
                </span>
              </p>
              <p className={error ? `${styles.error__sub1}` : `${styles.error__sub2}`}>
                Introduce el código de 6 dígitos
              </p>

              <div className={styles.wrapper}>
                <OTPInput
                  onChange={handleChange}
                  value={OTP}
                  inputType="number"
                  inputStyle={styles.wrapper__inputStyle}
                  numInputs={6}
                  renderSeparator={<span></span>}
                  renderInput={(props) => <input  {...props} />}
                />
              </div>

              {error ? (
                <div className={styles.error__message}>
                  <span>Por favor, introduce los 6 dígitos</span>
                </div>
              ) : null}
              <span className={styles.newCode} onClick={()=> console.log("span can be clicked")}>Enviar nuevo código</span>
              <div className={styles.submit}>
                <Button text="Enviar" type="submit" />
              </div>
            </Form>
          )}
        </Formik>

        {loading && <Loader loading={loading} />}
      </div>
    </>
  );
};

const OtpValidation = memo(OtpCodeValidation);
export default OtpValidation;
