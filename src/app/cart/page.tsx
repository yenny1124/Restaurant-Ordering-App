"use client";
import "./cart.css";
import React from "react";
import { useEffect, useState } from "react";
import { CartItemType } from "../types";
import CartItems from "./CartItems";
import ItemizedBill from "./ItemizedBill";
import Link from "next/link";
import { fetchCartItems } from "../services/fetchservices";
import { clearCart, localCartRefresh } from "../services/cartservices";
export default function Cart() {
  const [cartItems, setCartItems] = useState<Array<CartItemType>>([]);

  useEffect(() => {
    fetchCartItems().then((updatedCartItems) => {
      setCartItems(updatedCartItems);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("storage", cartListener);
    return () => {
      window.removeEventListener("storage", cartListener);
    };
  }, [cartItems]);

  function cartListener() {
    const updatedCartItems = localCartRefresh(cartItems);
    if (!Array.isArray(updatedCartItems) || !updatedCartItems.length) return;
    setCartItems(updatedCartItems);
  }

  return (
    <main className="cart-main">
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      <div className="cart-details">
        <div className="cart-background">
          <div className="cart-content">
            {!Array.isArray(cartItems) ||
              (!cartItems.length && (
                <p style={{ color: "white" }}>loading cart details...</p>
              ))}
            <CartItems items={cartItems}></CartItems>

            <button
              onClick={() => {
                clearCart();
              }}
              className="clear-cart"
            >
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
      </div>
    </main>
  );
}
