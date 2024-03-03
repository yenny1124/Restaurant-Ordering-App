"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartLink(props: { path: string; text: string }) {
  const [selectedClass, setClass] = useState("");

  const pathname = usePathname();
  const lastPath = pathname.substring(
    pathname.lastIndexOf("/"),
    pathname.length
  );

  // set style to current page's link
  useEffect(() => {
    if (lastPath == props.path) {
      setClass("current-page");
    } else {
      setClass("");
    }
  }, [lastPath, props, props.path]);

  const [cartCount, setCartCount] = useState(0);

  // correctly render when local storage state changes
  useEffect(() => {
    if (
      localStorage.getItem("cartCount") === null ||
      localStorage.getItem("cartCount") == "NaN"
    )
      localStorage.setItem("cartCount", "0");
    const cartCountListener = () => {
      const count = localStorage.getItem("cartCount");
      if (count != null) setCartCount(parseInt(count));
    };

    cartCountListener();
    window.addEventListener("storage", cartCountListener);

    return () => {
      window.removeEventListener("storage", cartCountListener);
    };
  }, []);

  return (
    <Link href={`${props.path}`} className={`navbar-link ${selectedClass}`}>
      {props.text}
      <div className="cart-item-counter">
        <FontAwesomeIcon icon={faCircle} />
        <span> {cartCount}</span>
      </div>
    </Link>
  );
}
