import MainNavBarLink from "./MainNavBarLink";
import CartLink from "./CartLink";

export default function NavBarLinks() {
  return (
    <nav className={`main-navbar-links`}>
      <MainNavBarLink path="/home" text="Home" />
      <MainNavBarLink path="/menu" text="Menu" />
      <MainNavBarLink path="/about" text="About" />
      <MainNavBarLink path="/order" text="Order" />
      <MainNavBarLink path="/booktable" text="Book Table" />
      <MainNavBarLink path="/contact" text="Contact Us" />
      <CartLink path="/cart" text="Cart" />
    </nav>
  );
}
