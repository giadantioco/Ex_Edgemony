import styles from "./Footer.module.css";
import { labels } from "../../data/labels";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{labels.footer}</p>
    </footer>
  );
}

export default Footer;
