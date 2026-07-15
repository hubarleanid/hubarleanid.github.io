import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={`mono ${styles.footer}`}>
      <span>© {new Date().getFullYear()} Leanid Hubar</span>
      <span>
        built with <span className={styles.accent}>.NET</span> mindset · exit 0
      </span>
    </footer>
  );
}
