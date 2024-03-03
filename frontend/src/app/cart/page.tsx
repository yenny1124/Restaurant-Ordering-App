"use client";
import "./cart.css";
import { ItemCard } from "../menu/categories/[category]/components/itemcard/ItemCard";
import React from "react";
export default function Cart() {
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
      {createCards()}
    </main>
  );
}
