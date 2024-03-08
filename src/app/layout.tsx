import type { Metadata } from "next";
import "./globals.css";
import { Fredoka } from "next/font/google";
import Footer from "./components/global/footer/Footer";
import MainNavBar from "./components/global/mainnavbar/MainNavBar";
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
        <MainNavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
