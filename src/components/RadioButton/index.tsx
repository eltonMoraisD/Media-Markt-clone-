import { Field, useField } from "formik";
import styles from "./styles.module.scss";

interface IInputProps {
  type: string;
  name: any;
  label: string;
  value: any;
  id: string;
  checked: any;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const RadioButton: React.FC<IInputProps> = (
  { type, name, handleChange, label, value, id, checked },
  props
) => {
  const [_, meta] = useField({ name });
  return (
    <div className={styles.container}>
    

        <Field
          onChange={handleChange}
          className={styles.input}
          checked={checked === value}
          id={id}
          value={value}
          name={name}
          type={type}
          {...props}
        />
        <label className={styles.label} htmlFor={type}>
          {label}
        </label>
    
      {/* {meta.touched && meta.error && (
        <div className={styles.error__message}>
          <span>{meta.error}</span>
        </div>
      )} */}
    </div>
  );
};

export default RadioButton;
