import Link from "next/link";
import "./navbar.css";
import HamburgerIcon from "./HamburgerIcon";
import HamburgerMenu from "./HamburgerMenu";
import RestaurantLogo from "./RestaurantLogo";
import NavLinks from "./NavLinks";
export default function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-placeholder"></div>
      <div className="navbar-contents">
        <RestaurantLogo />
        <NavLinks />
        <HamburgerIcon />
      </div>
      <HamburgerMenu />
    </header>
  );
}
