"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function NavLinks() {
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
      <Link href="/" className="navbar-link">
        Home
      </Link>
      <Link href="/menu" className="navbar-link">
        Menu
      </Link>
      <Link href="/about" className="navbar-link">
        About
      </Link>
      <Link href="/order" className="navbar-link">
        Order Online
      </Link>
      <Link href="/booktable" className="navbar-link">
        Book Table
      </Link>
      <Link href="/contact" className="navbar-link">
        Contact Us
      </Link>
      <Link href="/cart" className="navbar-link">
        Cart
        <span> {cartItems}</span>
        <FontAwesomeIcon icon={faCircle} />
      </Link>
    </nav>
  );
}
