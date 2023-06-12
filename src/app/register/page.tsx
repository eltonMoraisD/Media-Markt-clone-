import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./styles.module.scss";

interface IRegisterProps {}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
  return (
    <div className={styles.register}>
      <div className={styles.register__input}>
        <h1>Créer un compte</h1>
        <span className={styles.label}>Prénom</span>
        <Input type="text" name="" />
        <span className={styles.label}>Nome de famille</span>
        <Input type="text" name="" />

        <span className={styles.label}>Adresse e-mail</span>
        <Input type="email" name="" />

        <span className={styles.label}>Mot de passe</span>
        <Input type="password" name="" />
      </div>

      <div className={styles.register__submit}>
        <Button text="Créer" />
      </div>
    </div>
  );
};

export default Register;
