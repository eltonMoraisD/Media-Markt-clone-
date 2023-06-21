import { SignUpValidation } from "@/components/Formik/SignupValidation";
import styles from "./styles.module.scss";

const SignUp = () => {
  return (
    <div className={styles.signup}>
      <div className={styles.signup__input}>
        <SignUpValidation />
      </div>
    </div>
  );
};

export default SignUp;
