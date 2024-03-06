"use client";
import { CartItemType } from "../types";
import React from "react";
import CartItem from "./components/CartItem";
import { useEffect, useState } from "react";
export default function ItemizedBill(props: { items: Array<CartItemType> }) {
  function createBillDisplay() {
    let cards: Array<React.FunctionComponentElement<CartItemType>> = [];
    let total = 0;
    props.items.forEach(({ item, quantity }) => {
      let itemTotal = item.prices[0] * quantity;
      total += itemTotal;
      cards.push(
        <p key={item._id}>{`${item.prices[0]} x ${quantity} = ${itemTotal}`}</p>
      );
    });
    cards.push(<p key="total">{`The Total Is $${total}`}</p>);
    return cards;
  }

  return <>{createBillDisplay()}</>;
}
