"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Switch } from "antd";
import { useThemeMode } from "@/components/ThemeProvider/ThemeProvider";
import styles from "./Nav.module.scss";

const tabs = [
  { href: "/", num: "01", label: "about" },
  { href: "/experience", num: "02", label: "experience" },
  { href: "/projects", num: "03", label: "projects" },
  { href: "/blog", num: "04", label: "blog" },
];

export default function Nav() {
  const pathname = usePathname();
  const { dark, toggle } = useThemeMode();

  return (
    <>
      <div className={styles.topRow}>
        <Link href="/" className={`mono ${styles.brand}`}>
          <span className={styles.tilde}>~</span>/hubarleanid
        </Link>
        <div className={styles.themeControl}>
          <span className={`mono ${styles.themeLabel}`}>theme: {dark ? "dark" : "light"}</span>
          <Switch
            checked={dark}
            onChange={toggle}
            checkedChildren="☾"
            unCheckedChildren="☀"
            aria-label="Toggle color theme"
          />
        </div>
      </div>

      <nav className={styles.tabs}>
        {tabs.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname?.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`mono ${styles.tab} ${active ? styles.tabOn : ""}`}
            >
              {tab.num}·{tab.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
