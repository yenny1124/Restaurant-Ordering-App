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

  useEffect(() => {
    if (lastPath == props.path) {
      setClass("current-page");
    } else {
      setClass("");
    }
  }, [lastPath, props, props.path]);

  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    if (
      localStorage.getItem("cartItems") === null ||
      localStorage.getItem("cartItems") == "NaN"
    )
      localStorage.setItem("cartItems", "0");
    const cartItemsListener = () => {
      const numItems = localStorage.getItem("cartItems");
      if (numItems != null) setCartItems(parseInt(numItems));
    };

    cartItemsListener();
    window.addEventListener("storage", cartItemsListener);

    return () => {
      window.removeEventListener("storage", cartItemsListener);
    };
  }, []);

  return (
    <Link href={`${props.path}`} className={`navbar-link ${selectedClass}`}>
      {props.text}
      <div className="cart-item-counter">
        <FontAwesomeIcon icon={faCircle} />
        <span> {cartItems}</span>
      </div>
    </Link>
  );
}
