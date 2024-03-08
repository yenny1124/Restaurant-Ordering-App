"use client";
import "./cart.css";
import React from "react";
import { useEffect, useState } from "react";
import { CartItemType } from "../types";
import CartItems from "./CartItems";
import ItemizedBill from "./ItemizedBill";
import Link from "next/link";
export default function Cart() {
  const [cartItems, setCartItems] = useState<Array<CartItemType>>([]);

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
          `https://restaurant-ecommerce.onrender.com/api/get/product/${objectValue._id}`
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
    if (!confirm("Do you really want to clear your cart?")) return;
    const localStorageKeys = Object.keys(localStorage);
    localStorageKeys.forEach((key) => {
      if (key.includes("cart-item")) localStorage.removeItem(key);
    });
    localStorage.setItem("cartCount", "0");
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <main className="cart-main">
      <div className="cart-background">
        <div className="cart-content">
          <CartItems items={cartItems}></CartItems>

          <button onClick={clearCart} className="clear-cart">
            Clear Cart
          </button>
        </div>
        <div className="cart-bill">
          <ItemizedBill items={cartItems} />
          <Link className="button-lg" href="/checkout">
            Checkout
          </Link>
        </div>
      </div>
    </main>
  );
}
