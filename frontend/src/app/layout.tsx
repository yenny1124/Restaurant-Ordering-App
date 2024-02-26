import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rolls & Rolls Plus Sushi",
  description: "Rolls & Rolls Plus Sushi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
