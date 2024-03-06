"use client";
import "./cart.css";
import React from "react";
import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
export default function Cart() {
  const [cartItems, setCartItems] = useState(createItemList());
  const [isClient, setIsClient] = useState(false);
  const [orderTotal, setOrderTotal] = useState(calculateTotal());
  const [itemPrices, setItemPrices] = useState(createItemizedBill());

  // load all cart items and display
  function createItemList() {
    if (typeof localStorage === "undefined") {
      return <p>uh oh</p>;
    }
    const localStorageKeys = Object.keys(localStorage);
    let itemCards: any = [];
    try {
      localStorageKeys.forEach((key: string) => {
        if (!key.includes("cart-item")) return;
        const item = JSON.parse(localStorage.getItem(key) ?? "");

        let itemCard = React.createElement(CartItem, {
          key: `item-card-${item.item._id}`,
          item: item,
        });
        itemCards.push(itemCard);
      });
    } catch (error) {
      return <h2>An error occured</h2>;
    }

    return itemCards;
  }

  function calculateTotal() {
    if (typeof localStorage === "undefined") {
      return <p>uh oh</p>;
    }
    let orderTotal = 0;
    const localStorageKeys = Object.keys(localStorage);
    let itemTotals: any = [];
    try {
      localStorageKeys.forEach((key: string) => {
        if (!key.includes("cart-item")) return;
        const item = JSON.parse(localStorage.getItem(key) ?? "");
        orderTotal += parseFloat(item.item.prices) * item.quantity;
        let itemCard = React.createElement(
          "p",
          {
            key: `item-total-${item.item._id}`,
          },
          `${item.item.name} x${item.quantity} = $${
            item.quantity * item.item.prices
          }`
        );
        itemTotals.push(itemCard);
      });
    } catch (error) {
      return <h2>An error occured</h2>;
    }
    return orderTotal;
  }

  function createItemizedBill() {
    if (typeof localStorage === "undefined") {
      return <p>uh oh</p>;
    }
    const localStorageKeys = Object.keys(localStorage);
    let itemTotals: any = [];
    try {
      localStorageKeys.forEach((key: string) => {
        if (!key.includes("cart-item")) return;
        const item = JSON.parse(localStorage.getItem(key) ?? "");
        let itemCard = React.createElement(
          "p",
          {
            key: `item-total-${item.item._id}`,
          },
          `${item.item.name} x${item.quantity} = $${
            item.quantity * item.item.prices
          }`
        );
        itemTotals.push(itemCard);
      });
    } catch (error) {
      return <h2>An error occured</h2>;
    }
    return itemTotals;
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
      setCartItems(createItemList());
      setItemPrices(createItemizedBill());
      setOrderTotal(calculateTotal());
    };

    cartItemsListener();
    window.addEventListener("storage", cartItemsListener);

    return () => {
      window.removeEventListener("storage", cartItemsListener);
    };
  }, []);

  return (
    <main className="cart-main">
      <div className="cart-content">
        {isClient && cartItems}
        <button onClick={clearCart}>clear cart</button>
      </div>
      <div className="cart-bill">
        {isClient && itemPrices}
        <p> {isClient && orderTotal}</p>
      </div>
    </main>
  );
}
