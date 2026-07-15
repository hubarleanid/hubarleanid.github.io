import type { Metadata } from "next";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { profile } from "@/data/profile";
import "./globals.scss";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.summary,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
