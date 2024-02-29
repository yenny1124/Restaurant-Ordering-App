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
} from "@fortawesome/free-solid-svg-icons";
import "./hamburger.css";

export default function HamburgerMenu(props: { className: string }) {
  return (
    <div className={`hamburger-menu ${props.className}`}>
      <div className="hamburger-top"></div>

      <nav className={`burger-links`}>
        <Link href="/" className="burger-link">
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
        <Link href="/order" className="burger-link">
          <FontAwesomeIcon icon={faUtensils} />
          Order Online
        </Link>
        <Link href="/booktable" className="burger-link">
          <FontAwesomeIcon icon={faCalendarDay} />
          Book Table
        </Link>
        <Link href="contact" className="burger-link">
          <FontAwesomeIcon icon={faPhone} />
          Contact Us
        </Link>
        <Link href="/cart" className="burger-link">
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </Link>
      </nav>
    </div>
  );
}
