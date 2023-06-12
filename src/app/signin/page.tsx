import Button from "@/components/Button";
import Input from "@/components/Input";
import styles from "./styles.module.scss";
import { getProviders, signIn } from "next-auth/react";
import GoogleBtnProvider from "./googleBtnProvider";
import googleIcon from "../../assets/icons/google.png";
import { StaticImageData } from "next/image";

interface ISignInProps {
  providerId: string | undefined;
  title: string;
  icon: StaticImageData;
}

const SignIn: React.FunctionComponent<ISignInProps> = async () => {

  const data = await getProvidersContext();
  const providers = Object.values(data);
 
  return (
    <div className={styles.signin}>
      <div className={styles.signin__input}>
        <h1>Connexion</h1>
        <span className={styles.label}>E-mail</span>
        <Input type="email" name="" />
        <span className={styles.label}>Mot de passe</span>
        <Input type="password" name="" />
      </div>

      <div className={styles.signin__submit}>
        <p>Mot de passe oublie</p>
        <Button text="Se connecter" />

        <span>Creer un compte</span>
      </div>
      <div className={styles.login__socials}>
        <span className={styles.or}>Or continue with</span>
        <div className={styles.login__socials_wrap}>
          {providers.map((provider) => (
            <div key={provider?.google.id}>
              <GoogleBtnProvider
                title={`Sign in with ${provider?.google.name}`}
                providerId={provider?.google.id}
                icon={googleIcon}
              ></GoogleBtnProvider>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getProvidersContext() {
  const providers = await getProviders();
  return { providers };
}

export default SignIn;
