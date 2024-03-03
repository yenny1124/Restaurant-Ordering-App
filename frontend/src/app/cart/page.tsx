"use client";
import "./cart.css";
import { ItemCard } from "../components/itemcard/ItemCard";
import React from "react";
import { useEffect, useState } from "react";
export default function Cart() {
  const [cartItems, setCartItems] = useState(createCards());

  function createCards() {
    const localStorageKeys = Object.keys(localStorage);
    let itemCards: any = [];
    try {
      localStorageKeys.forEach((key: string, i: number) => {
        if (!key.includes("cart-item")) return;
        const item = JSON.parse(localStorage.getItem(key) ?? "");
        let itemCard = React.createElement(ItemCard, {
          name: item.name,
          desc: item.desc,
          key: `item-card-${item._id + i}`,
          img: item.img,
          prices: item.prices,
          _id: item._id,
        });
        itemCards.push(itemCard);
      });
    } catch (error) {
      return <h2>An error occured</h2>;
    }

    return itemCards;
  }

  useEffect(() => {
    const cartItemsListener = () => {
      setCartItems(createCards());
    };

    cartItemsListener();
    window.addEventListener("storage", cartItemsListener);

    return () => {
      window.removeEventListener("storage", cartItemsListener);
    };
  }, []);

  return (
    <main className="cart-main">
      <span>hello world</span>
      <button
        onClick={() => {
          const localStorageKeys = Object.keys(localStorage);
          localStorageKeys.forEach((key) => {
            if (key.includes("cart-item")) localStorage.removeItem(key);
          });
          localStorage.setItem("cartItems", "0");
          window.dispatchEvent(new Event("storage"));
        }}
      >
        clear cart
      </button>
      {cartItems}
    </main>
  );
}
