import styles from "./styles.module.scss";

import { getProviders, getCsrfToken } from "next-auth/react";

import GoogleBtnProvider from "./googleBtnProvider";
import googleIcon from "../../assets/icons/google.png";
import { StaticImageData } from "next/image";
import { SignInValidation } from "@/components/Formik/SigninValidation";
import { cookies } from "next/dist/client/components/headers";
import HeadAuths from "@/components/HeadAuths";

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
    <>
      <HeadAuths />
      <div className={styles.all}>
        <SignInValidation csrfToken={csrfToken} />
        <div className={styles.login__socials}>
          <div className={styles.login__socials_wrap}>
            {providers.map((provider) => (
              <div className={styles.btn} key={provider?.google.id}>
                <GoogleBtnProvider
                  title={` ${provider?.google.name}`}
                  providerId={provider?.google.id}
                  icon={googleIcon}
                ></GoogleBtnProvider>
                {/* <GoogleBtnProvider
                title={`Connectez-vous avec ${provider?.google.name}`}
                providerId={provider?.google.id}
                icon={googleIcon}
              ></GoogleBtnProvider> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getProvidersContext() {
  const providers = await getProviders();
  return { providers };
}

export default SignIn;
