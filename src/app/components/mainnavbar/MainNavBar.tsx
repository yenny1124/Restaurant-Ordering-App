import "./mainnavbar.css";
import HamburgerMenu from "./HamburgerMenu";
import MainNavBarLinks from "./MainNavBarLinks";
import LogoLink from "../logolink/LogoLink";

export default function MainNavBar() {
  return (
    <header className="main-navbar">
      <div className="main-navbar-placeholder"></div>
      <div className="main-navbar-contents">
        <LogoLink
          width={75}
          height={75}
          imageUrl="/logo.png"
          altText="Rolls & Rolls Restaurant Logo"
        />
        <MainNavBarLinks />
        <HamburgerMenu />
      </div>
    </header>
  );
}
