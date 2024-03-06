"use client";
import Link from "next/link";
import "./mainnavbar.css";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerMenu from "./HamburgerMenu";
import RestaurantLogo from "./RestaurantLogo";
import MainNavBarLinks from "./MainNavBarLinks";
import { useState } from "react";

export default function MainNavBar() {
  const [menuOn, toggleMenu] = useState(false);
  const [menuState, setMenuState] = useState("on-screen");
  function handleMenu() {
    toggleMenu(!menuOn);
    if (menuOn) setMenuState("on-screen");
    else setMenuState("off-screen");
  }

  return (
    <header className="main-navbar">
      <div className="main-navbar-placeholder"></div>
      <div className="main-navbar-contents">
        <RestaurantLogo />
        <MainNavBarLinks />
        <HamburgerIcon onClick={handleMenu} />
      </div>
      <HamburgerMenu className={menuState} />
    </header>
  );
}
