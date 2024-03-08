import CartCounter from "./CartCounter";
import MainNavBarLink from "./MainNavBarLink";

export default function MainNavBarLinks() {
  return (
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
  );
}
