"use client";
import "./cart.css";
import React, { useLayoutEffect } from "react";
import { useEffect, useState } from "react";
import { CartItemType, ItemType } from "../types";
import CartItems from "./CartItems";
export default function Cart() {
  const [cartItems, setCartItems] = useState<Array<CartItemType>>([]);
  const [isClient, setIsClient] = useState(false);
  // const [orderTotal, setOrderTotal] = useState(calculateTotal());
  //const [itemPrices, setItemPrices] = useState(createItemizedBill());

  useEffect(() => {
    getItems();
    window.addEventListener("storage", updateCartItems);
  }, []);

  useEffect(() => {
    window.addEventListener("storage", updateCartItems);
    return () => {
      window.removeEventListener("storage", updateCartItems);
    };
  }, [cartItems]);

  function updateCartItems() {
    if (typeof localStorage === "undefined") {
      return;
    }

    let updatedCartItems: Array<CartItemType> = [];
    cartItems.forEach((item) => {
      const key = "cart-item" + item.item._id;

      const value = localStorage.getItem(key);

      if (value === null) {
        return;
      }
      const parsedValue = JSON.parse(value);
      if (parsedValue === undefined) return;
      const quantity = parseInt(parsedValue.quantity);
      updatedCartItems.push({ item: item.item, quantity: quantity });
      // we are checking each element
      // we want to see if it exists in localStorage
      // if it does, we set the quantity to match
    });
    setCartItems(updatedCartItems);
  }
  const getItems = async () => {
    if (typeof localStorage === "undefined") {
      return;
    }
    const keys = Object.keys(localStorage);
    let items: Array<CartItemType> = [];

    await Promise.all(
      keys.map(async (key: string) => {
        if (!key.includes("cart-item")) return;
        const stringValue = localStorage.getItem(key);
        if (stringValue === null) return;
        const objectValue = JSON.parse(stringValue);
        let response;
        if (objectValue === undefined) return;

        response = await fetch(
          `http://localhost:3003/api/get/product/${objectValue._id}`
        );

        if (!response.ok) {
          console.log(
            `Could not retrieve ${objectValue._id} item from database`
          );
          return;
        }

        const item = await response.json();
        items.push({ item, quantity: objectValue.quantity });
      })
    );
    setCartItems(items);
  };

  // clears cart items and count in local storage
  function clearCart() {
    const localStorageKeys = Object.keys(localStorage);
    localStorageKeys.forEach((key) => {
      if (key.includes("cart-item")) localStorage.removeItem(key);
    });
    localStorage.setItem("cartCount", "0");
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <main className="cart-main">
      <div className="cart-content">
        <CartItems items={cartItems}></CartItems>

        <button onClick={clearCart}>clear cart</button>
      </div>
      <div className="cart-bill">
        {/*isClient && itemPrices*/}
        <p> {/*isClient && orderTotal*/}</p>
      </div>
    </main>
  );
}

/*
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
  */
/*
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
  */

/*
    we want to update the cart items array only
    more specifically, we want to remove items or update tehe quantity
    to do this we will need to make a copy of the array
    we will need to check local storage
    */
