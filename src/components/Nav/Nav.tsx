import Link from "next/link";
import styles from "./Nav.module.scss";

const links = [
  { href: "/", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand}>
          Leanid Hubar
        </Link>
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
