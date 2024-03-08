import "./mainnavbar.css";
import HamburgerMenu from "../hamburgermenu/HamburgerMenu";
import LogoLink from "../logolink/LogoLink";
import CartCounter from "../cartcounter/CartCounter";
import MainNavBarLink from "./MainNavBarLink";

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
        <nav className={`main-navbar-links`}>
          <MainNavBarLink path="/home" text="Home" />
          <MainNavBarLink path="/menu" text="Menu" />
          <MainNavBarLink path="/about" text="About" />
          <MainNavBarLink path="/booktable" text="Book Table" />
          <MainNavBarLink path="/cart" text="Cart">
            &nbsp;
            <CartCounter />
          </MainNavBarLink>
        </nav>
        <HamburgerMenu />
      </div>
    </header>
  );
}
