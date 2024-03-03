import NavBarLink from "./NavBarLink";

import { useEffect, useState } from "react";
import CartLink from "./CartLink";

export default function NavBarLinks() {
  const [cartItems, setCartItems] = useState(0);

  return (
    <nav className={`navbar-links`}>
      <NavBarLink path="/home" text="Home" />
      <NavBarLink path="/menu" text="Menu" />
      <NavBarLink path="/About" text="About" />
      <NavBarLink path="/order" text="Order" />
      <NavBarLink path="/booktable" text="Book Table" />
      <NavBarLink path="/contact" text="Contact Us" />
      <CartLink path="/cart" text="Cart" />
    </nav>
  );
}
