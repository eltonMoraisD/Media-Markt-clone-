"use client";
import { FirstStepAuthValidation } from "@/components/Formik/FirstStepAuthValidation";
import { SignUpValidation } from "@/components/Formik/SignupValidation";
import HeadAuths from "@/components/HeadAuths";
import ProgressSteps from "@/components/ProgressSteps";
import { useState } from "react";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { OtpCodeValidation } from "@/components/Formik/OtpCodevalidation";

const SignUp = () => {
  const [isActive, setActive] = useState<boolean>(true);
  const [role, setRole] = useState<string>("client")
  const pageStage = useSelector(({ stepsReducer }) => stepsReducer.FormStage)
  // let pageStage = 2;

  const handleActiveBtn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { name } = e.currentTarget
    setRole(name)
    if (name === "client") {
      setActive(true);
    } else {
      setActive(false);
    }
  };
  return (
    <>
      <HeadAuths />
      <div className={styles.signup}>
        <div className={styles.signup__input}>
          <h1>¿Nuevo cliente?</h1>
          <ProgressSteps pageStage={pageStage} />

          {pageStage === 1 && <FirstStepAuthValidation />}

          {pageStage === 2 && <OtpCodeValidation />}

          {pageStage === 3 && (
            <>
              <div className={styles.rules}>
                <button
                  name="client"
                  onClick={handleActiveBtn}
                  className={
                    isActive
                      ? `${styles.rules__left} ${styles.active}`
                      : `${styles.rules__left}`
                  }
                >
                  Cliente privado
                </button>
                <button
                  onClick={handleActiveBtn}
                  name="company"
                  className={
                    isActive
                      ? `${styles.rules__right}`
                      : `${styles.rules__right}  ${styles.active}`
                  }
                >
                  Cliente de empresas
                </button>
              </div>
              <SignUpValidation role={role} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SignUp;
