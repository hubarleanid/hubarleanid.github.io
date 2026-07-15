"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { ConfigProvider, theme as antdTheme } from "antd";
import { darkTokens, lightTokens, THEME_STORAGE_KEY } from "@/lib/theme";

type ThemeContextValue = {
  dark: boolean;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  dark: true,
  toggle: () => {},
});

export function useThemeMode() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved) setDark(saved === "dark");
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem(THEME_STORAGE_KEY, next ? "dark" : "light");
      return next;
    });
  };

  const tokens = dark ? darkTokens : lightTokens;

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <ConfigProvider
        theme={{
          algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
          token: {
            colorPrimary: tokens.accent,
            colorBgContainer: tokens.bg2,
            colorBgLayout: tokens.bg,
            colorBorder: tokens.border,
            colorText: tokens.fg,
            colorTextSecondary: tokens.dim,
            fontFamily: "var(--font-sans)",
            borderRadius: 10,
          },
        }}
      >
        <div
          className={`theme ${dark ? "" : "themeLight"}`}
          style={{
            // CSS custom properties consumed by globals.scss and component styles
            ["--bg" as string]: tokens.bg,
            ["--bg2" as string]: tokens.bg2,
            ["--border" as string]: tokens.border,
            ["--fg" as string]: tokens.fg,
            ["--dim" as string]: tokens.dim,
            ["--accent" as string]: tokens.accent,
            ["--accent-soft" as string]: tokens.accentSoft,
            ["--accent-line" as string]: tokens.accentLine,
            ["--dots" as string]: tokens.dots,
          }}
        >
          <div className="dotgrid">{children}</div>
        </div>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
