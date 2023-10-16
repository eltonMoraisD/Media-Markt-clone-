"use client"
import styles from "./styles.module.scss"
import Image from 'next/image'
import SucessImage from '../../assets/successRegister.png'
import Button from '@/components/Button'
import { useSelector } from "react-redux"
import Link from "next/link"

export default function Success() {
  const userName = useSelector(({ stepsReducer }) => stepsReducer.FormFirstName)
  return (
    <>
      <div className={styles.success}>
        <div className={styles.success__container}>
          <Image src={SucessImage} width={150} height={150} alt={'Resgister Sucess'} />
          <h1 className={styles.success__title}>¡Te has registrado correctamente!</h1>
          <p className={styles.success__subtitle}>Hola <span className={styles.success__username} >{userName}</span>. ¡Has creado con éxito una cuenta online en MediaMarkt!</p>
          <div className={styles.success__btn}>
            <Link href="/">Seguir comprando</Link>
            <Link href={""}>Ir a mi cuenta</Link>
            {/* <Button text='Seguir comprando' type='button' /> */}
            {/* <Button text='Ir a mi cuenta' type='button' /> */}
          </div>
        </div>
      </div>
    </>
  )
}


