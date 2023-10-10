import styles from "./styles.module.scss";
import { RiSearch2Line } from "react-icons/ri";

const Search: React.FC = () => {
  return (
    <form action="" className={styles.search}>
      <button className={styles.search__btn}>
        <RiSearch2Line />
      </button>
      <input type="text" placeholder="Buscar" />
    </form>
  );
};

export default Search;
