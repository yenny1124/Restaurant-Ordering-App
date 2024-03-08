import "./mainnavbar.css";
import HamburgerMenu from "./HamburgerMenu";
import RestaurantLogo from "./RestaurantLogo";
import MainNavBarLinks from "./MainNavBarLinks";

export default function MainNavBar() {
  return (
    <header className="main-navbar">
      <div className="main-navbar-placeholder"></div>
      <div className="main-navbar-contents">
        <RestaurantLogo />
        <MainNavBarLinks />
        <HamburgerMenu />
      </div>
    </header>
  );
}
