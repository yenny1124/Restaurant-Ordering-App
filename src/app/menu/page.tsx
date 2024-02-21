import { Architects_Daughter } from "next/font/google";
import "./menu.css";
import Link from "next/link";
import MenuNavbar from "./components/MenuNavbar";
import React from "react";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export default async function Menu() {
  return (
    <main className="menu-main">
      <h1 className={architectsDaughter.className}>Menu</h1>
      <MenuNavbar />
    </main>
  );
}
