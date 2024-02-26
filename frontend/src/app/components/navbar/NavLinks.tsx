import Link from "next/link";

export default function NavLinks() {
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
      </Link>
    </nav>
  );
}
