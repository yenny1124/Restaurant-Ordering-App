"use client";
import "./cart.css";
import { ItemCard } from "../menu/components/itemcard/ItemCard";
import React from "react";
import { useEffect, useState } from "react";
import { render } from "react-dom";
export default function Cart() {
  const [cartItems, setCartItems] = useState(loadItems());
  const [isClient, setIsClient] = useState(false);
  // load all cart items and display
  function loadItems() {
    if (typeof localStorage === "undefined") {
      return <p>uh oh</p>;
    }
    const localStorageKeys = Object.keys(localStorage);
    let itemCards: any = [];
    try {
      localStorageKeys.forEach((key: string) => {
        if (!key.includes("cart-item")) return;
        const item = JSON.parse(localStorage.getItem(key) ?? "");

        let itemCard = React.createElement(
          "p",
          {
            key: `item-card-${item.item._id}`,
          },
          JSON.stringify(item)
        );
        itemCards.push(itemCard);
      });
    } catch (error) {
      return <h2>An error occured</h2>;
    }

    return itemCards;
  }

  // clears cart items and count in local storage
  function clearCart() {
    const localStorageKeys = Object.keys(localStorage);
    localStorageKeys.forEach((key) => {
      if (key.includes("cart-item")) localStorage.removeItem(key);
    });
    localStorage.setItem("cartCount", "0");
    window.dispatchEvent(new Event("storage"));
  }

  // makes sure cart related state renders correctly when local storage is changed
  useEffect(() => {
    setIsClient(true);
    const cartItemsListener = () => {
      setCartItems(loadItems());
    };

    cartItemsListener();
    window.addEventListener("storage", cartItemsListener);

    return () => {
      window.removeEventListener("storage", cartItemsListener);
    };
  }, []);

  return (
    <main className="cart-main">
      <button onClick={clearCart}>clear cart</button>
      {isClient && cartItems}
    </main>
  );
}
