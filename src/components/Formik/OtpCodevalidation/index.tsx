"use client";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { Hotp } from "time2fa";

import Button from "@/components/Button";

import { Form, Formik } from "formik";
import {
  memo,
  useState,
} from "react";
import { formStage } from "../../../redux/reducers/stageSlice";

import { useRouter } from "next/navigation";

interface IOtpProps { }

export const OtpCodeValidation = (props: IOtpProps): JSX.Element => {
  // const { data: session } = useSession();
  const userEmail = useSelector(({ stepsReducer }) => stepsReducer.FormEmail);
  const secret = useSelector(({ stepsReducer }) => stepsReducer.Secret)
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [OTP, setOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispach = useDispatch();

  const handlePaste: React.ClipboardEventHandler = (event) => {
    const data = event.clipboardData.getData('text').trim();
    const pasted = Array.from(data).filter(v => v !== "\n").join("")
    setOTP(pasted)
  };

  const isOtpMatched = async () => {
    setLoading(true)
    if (OTP.length < 6) {
      setErrorMessage("Por favor, introduce los 6 dígitos")
      setError(true);
      setLoading(false)
    } else {
      setError(false);
      setErrorMessage("")
    }

    const valid = Hotp.validate({
      passcode: OTP.toString(),
      secret: secret,
      counter: 1,
    });
    if (valid) {
      dispach(formStage(3)); //update the steps
      setErrorMessage("")
      setLoading(false)
    } else {
      setError(true);
      setErrorMessage("El código no es válido. Compruébalo y vuelve a intentarlo o solicita un nuevo código con el siguiente enlace.")
      setLoading(false)
    }
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
          onSubmit={isOtpMatched}
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
                <div>
                  <OTPInput
                    onChange={handleChange}
                    value={OTP}
                    inputType="number"
                    inputStyle={styles.wrapper__inputStyle}
                    numInputs={6}
                    onPaste={handlePaste}
                    renderInput={(props) => <input  {...props} />}
                  />

                </div>
              </div>

              {error ? (
                <div className={styles.error__message}>
                  <span>{errorMessage}</span>
                </div>
              ) : null}
              <span className={styles.newCode} onClick={() => console.log("span can be clicked")}>Enviar nuevo código</span>
              <div className={styles.submit}>
                <Button loading={loading} text="Enviar" type="submit" />
              </div>
            </Form>
          )}
        </Formik>

      </div>
    </>
  );
};

const OtpValidation = memo(OtpCodeValidation);
export default OtpValidation;
