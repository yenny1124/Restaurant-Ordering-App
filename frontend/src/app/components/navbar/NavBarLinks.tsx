"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import NavBarLink from "./NavBarLink";

import { useEffect, useState } from "react";
import CartLink from "./CartLink";

export default function NavBarLinks() {
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    if (
      localStorage.getItem("cartItems") === null ||
      localStorage.getItem("cartItems") == "NaN"
    )
      localStorage.setItem("cartItems", "0");
    const cartItemsListener = () => {
      const numItems = localStorage.getItem("cartItems");
      console.log(numItems);
      if (numItems != null) setCartItems(parseInt(numItems));
    };

    cartItemsListener();
    window.addEventListener("storage", cartItemsListener);

    return () => {
      window.removeEventListener("storage", cartItemsListener);
    };
  }, []);

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
