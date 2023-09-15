import styles from "./styles.module.scss";

import { getProviders, getCsrfToken } from "next-auth/react";

import GoogleBtnProvider from "./googleBtnProvider";
import googleIcon from "../../assets/icons/google.png";
import { StaticImageData } from "next/image";
import { SignInValidation } from "@/components/Formik/SigninValidation";
import { cookies } from "next/dist/client/components/headers";

interface ISignInProps {
  providerId: string | undefined;
  title: string;
  icon: StaticImageData;
  type: string;
}

const SignIn: React.FunctionComponent<ISignInProps> = async () => {
  const data = await getProvidersContext();
  const providers = Object.values(data);

  const csrfToken = cookies()
    .get("next-auth.csrf-token")
    ?.value.split("|")[0] as string;

  // const csrfToken2 = await getCsrfToken();

  return (
    <div className={styles.group}>
      <SignInValidation csrfToken={csrfToken}>
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
