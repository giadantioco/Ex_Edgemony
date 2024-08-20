import styles from "./Header.module.css";
import { labels } from "../../data/labels";

function Header() {
  return (
    <header className={styles.header}>
      <h1>{labels.maternityProducts}</h1>
    </header>
  );
}

export default Header;
