import { Field, useField } from "formik";
import styles from "./styles.module.scss";

interface IInputProps {
  type: string;
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FunctionComponent<IInputProps> = (
  { type, name, handleChange, label, value },
  props
) => {
  const [_, meta] = useField({ name });

  return (
    <div className={styles.container}>
      <label className={value ? styles.Active : ""} htmlFor={type}>
        {label}
      </label>
      <Field
        onChange={handleChange}
        className={`${styles.input} ${
          meta.touched && meta.error ? styles.error : ""
        }`}
        value={value}
        name={name}
        type={type}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className={styles.error__message}>
          <span>{meta.error}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
