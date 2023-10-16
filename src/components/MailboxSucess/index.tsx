import styles from "./styles.module.scss"
import Image from "next/image"

import mailboxLogo from "../../assets/mailbox.png"
import { IoIosArrowForward } from "react-icons/io"
import Link from "next/link"

export default function index({ email }: { email: string }) {
  console.log("email chegandoooo")
  return (
    <div className={styles.mailbox}>
      <h1 className={styles.mailbox__title}>Revisa tu correo</h1>
      <Image src={mailboxLogo} alt="revisa tu correo" width={150} height={150} />
      <p className={styles.mailbox__sub}>
        Si ya tenías una cuenta, encontrarás las instrucciones para restablecer tu contraseña en tu
        dirección de correo electrónico <span>{email}</span>.
      </p>
      <p className={styles.mailbox__warning}>
        <span>El correo electrónico puede tardar hasta 10 minutos, </span>
        por favor, revisa también la carpeta de correo no deseado.
      </p>

      <div className={styles.mailbox__link}>
        <IoIosArrowForward />
        <Link href="/signin">Volver al inicio de sesión</Link>
      </div>
    </div>
  )
}
