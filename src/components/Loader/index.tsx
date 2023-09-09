import styles from "./styles.module.scss";
import DotLoader from "react-spinners/DotLoader";

export default function Loader({ loading }: { loading: boolean }) {
  return (
    <div>
      <div className={styles.loader}>
        <DotLoader color="#a51716" loading={loading} />
      </div>
    </div>
  );
}
