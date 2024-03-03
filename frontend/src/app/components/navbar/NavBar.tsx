"use client";
import Link from "next/link";
import "./navbar.css";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerMenu from "./HamburgerMenu";
import RestaurantLogo from "./RestaurantLogo";
import NavBarLinks from "./NavBarLinks";
import { useState } from "react";

export default function NavBar() {
  const [menuOn, toggleMenu] = useState(false);
  const [menuState, setMenuState] = useState("on-screen");
  function handleMenu() {
    toggleMenu(!menuOn);
    if (menuOn) setMenuState("on-screen");
    else setMenuState("off-screen");
  }

  return (
    <header className="navbar">
      <div className="navbar-placeholder"></div>
      <div className="navbar-contents">
        <RestaurantLogo />
        <NavBarLinks />
        <HamburgerIcon onClick={handleMenu} />
      </div>
      <HamburgerMenu className={menuState} />
    </header>
  );
}
