import styles from "./styles.module.scss";
import { getProviders } from "next-auth/react";
import GoogleBtnProvider from "./googleBtnProvider";
import googleIcon from "../../assets/icons/google.png";
import { StaticImageData } from "next/image";

import { SignInValidation } from "@/components/Formik/SigninValidation";

interface ISignInProps {
  providerId: string | undefined;
  title: string;
  icon: StaticImageData;
  type: string;
}

const SignIn: React.FunctionComponent<ISignInProps> = async () => {
  const data = await getProvidersContext();
  const providers = Object.values(data);

  return (
    <div className={styles.group}>
      <SignInValidation>
        <div className={styles.signin}>
          <div className={styles.signin__input}>
            <div className={styles.login__socials}>
              <span className={styles.or}>ou continuer</span>
              <div className={styles.login__socials_wrap}>
                {providers.map((provider) => (
                  <div key={provider?.google.id}>
                    <GoogleBtnProvider
                      title={`Connectez-vous avec ${provider?.google.name}`}
                      providerId={provider?.google.id}
                      icon={googleIcon}
                    ></GoogleBtnProvider>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SignInValidation>
    </div>
  );
};

export async function getProvidersContext() {
  const providers = await getProviders();
  return { providers };
}

export default SignIn;
