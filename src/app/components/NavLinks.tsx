import Link from "next/link";
import { Fredoka } from "next/font/google";
const fredoka = Fredoka({ subsets: ["latin"] });

export default function NavLinks() {
  return (
    <nav className={`navbar-links ${fredoka.className}`}>
      <Link href="/menu" className="navbar-link">
        Menu
      </Link>
      <Link href="/about" className="navbar-link">
        About
      </Link>
      <Link href="/order-online" className="navbar-link">
        Order Online
      </Link>
      <Link href="/book-table" className="navbar-link">
        Book Table
      </Link>
      <Link href="" className="navbar-link">
        Contact Us
      </Link>
      <Link href="/bruh" className="navbar-link">
        Cart
      </Link>
    </nav>
  );
}
