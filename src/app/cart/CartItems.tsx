"use client";
import { CartItemType } from "../types";
import React from "react";
import CartItem from "./components/CartItem";
import { useEffect, useState } from "react";
export default function CartItems(props: { items: Array<CartItemType> }) {
  function createCartDisplay() {
    let cards: Array<React.FunctionComponentElement<CartItemType>> = [];
    props.items.forEach(({ item, quantity }) => {
      let card = React.createElement(CartItem, {
        key: `item-card-${item._id}`,
        item: item,
        quantity: quantity,
      });
      cards.push(card);
    });

    return cards;
  }

  return <>{createCartDisplay()}</>;
}