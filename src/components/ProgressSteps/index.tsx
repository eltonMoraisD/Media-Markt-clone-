import styles from "./styles.module.scss";

interface IStepsProps {
  pageStage: number;
}

const Steps: React.FC<IStepsProps> = ({ pageStage }) => {
  return (
    <div className={styles.progressbar}>
      <div
        className={
          pageStage === 1
            ? `${styles.progressbar__step} ${styles.progressbar__step_active}`
            : styles.progressbar__step
        }
        data-title="Especifica tu dirección de correo electrónico"
      ></div>

      <div
        className={
          pageStage === 2
            ? `${styles.progressbar__step} ${styles.progressbar__step_active}`
            : styles.progressbar__step
        }
        data-title="Verificar el correo electrónico"
      ></div>
      <div
        className={
          pageStage === 3
            ? `${styles.progressbar__step} ${styles.progressbar__step_active}`
            : styles.progressbar__step
        }
        data-title="Información personal"
      ></div>

      
    </div>
  );
};

export default Steps;
