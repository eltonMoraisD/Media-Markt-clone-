import { Field, useField } from "formik";
import styles from "./styles.module.scss";

interface IInputProps {
  type: string;
  name: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<IInputProps> = (
  { type, name, handleChange },
  props
) => {
  const [_, meta] = useField({ name });

  return (
    <>
      <Field
        onChange={handleChange}
        className={`${styles.input} ${
          meta.touched && meta.error ? styles.error : "" //show error message layout
        }`}
        name={name}
        type={type}
        {...props}
      />

      {meta.touched && meta.error && (
        <div className={styles.error__message}>
          <span>{meta.error}</span>
        </div>
      )}
    </>
  );
};

export default Input;
