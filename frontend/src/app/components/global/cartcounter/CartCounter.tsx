"use client";
import { useEffect, useState } from "react";
import "./cartcounter.css";
export default function CartCounter() {
  const [cartCount, setCartCount] = useState(0);

  // render when local storage state changes
  useEffect(() => {
    cartCountListener();
    window.addEventListener("storage", cartCountListener);
    return () => {
      window.removeEventListener("storage", cartCountListener);
    };
  }, []);

  const cartCountListener = () => {
    if (
      localStorage.getItem("cartCount") === null ||
      localStorage.getItem("cartCount") == "NaN"
    ) {
      localStorage.setItem("cartCount", "0");
    }
    const count = localStorage.getItem("cartCount");
    if (count != null) setCartCount(parseInt(count));
  };

  return (
    <div className="cart-counter">
      <div className="cart-counter-circle"></div>
      <span> {cartCount}</span>
    </div>
  );
}
