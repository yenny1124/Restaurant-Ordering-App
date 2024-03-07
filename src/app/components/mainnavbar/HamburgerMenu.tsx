import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBookOpen,
  faTimeline,
  faUtensils,
  faCalendarDay,
  faPhone,
  faCartShopping,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./hamburger.css";
import { useState, useEffect } from "react";

export default function HamburgerMenu(props: { className: string }) {
  const [cartCount, setCartCount] = useState(0);

  // render cart count when localstorage changes
  useEffect(() => {
    if (
      localStorage.getItem("cartCount") === null ||
      localStorage.getItem("cartCount") == "NaN"
    )
      localStorage.setItem("cartCount", "0");
    const cartCountListener = () => {
      const numCount = localStorage.getItem("cartCount");
      if (numCount != null) setCartCount(parseInt(numCount));
    };

    cartCountListener();
    window.addEventListener("storage", cartCountListener);

    return () => {
      window.removeEventListener("storage", cartCountListener);
    };
  }, []);

  return (
    <div className={`hamburger-menu ${props.className}`}>
      <div className="hamburger-top"></div>

      <nav className={`burger-links`}>
        <Link href="/home" className="burger-link">
          <FontAwesomeIcon icon={faHouse} />
          Home
        </Link>
        <Link href="/menu" className="burger-link">
          <FontAwesomeIcon icon={faBookOpen} />
          Menu
        </Link>
        <Link href="/about" className="burger-link">
          <FontAwesomeIcon icon={faTimeline} />
          About
        </Link>

        <Link href="/booktable" className="burger-link">
          <FontAwesomeIcon icon={faCalendarDay} />
          Book Table
        </Link>

        <Link href="/cart" className="burger-link">
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
          <div className="cart-item-counter">
            <FontAwesomeIcon icon={faCircle} />
            <span> {cartCount}</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}
