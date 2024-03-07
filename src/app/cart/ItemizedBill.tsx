"use client";
import { CartItemType } from "../types";
import React from "react";
import CartItem from "./components/CartItem";
import { useEffect, useState } from "react";
export default function ItemizedBill(props: { items: Array<CartItemType> }) {
  function round(number: number) {
    // Round up to the third decimal
    let roundedNumber = Math.ceil(number * 1000) / 1000;
    // Format to two decimals
    let formattedNumber = roundedNumber.toFixed(2);
    return parseFloat(formattedNumber);
  }
  function createBillDisplay() {
    let cards: Array<React.FunctionComponentElement<CartItemType>> = [];
    let total = 0;
    props.items.forEach(({ item, quantity }) => {
      let itemTotal = round(item.prices[0] * quantity);
      total += itemTotal;
      cards.push(<p key={item.name}>{item.name}</p>);
      cards.push(
        <p key={item._id}>{`${item.prices[0]} x ${quantity} = ${itemTotal}`}</p>
      );
    });
    cards.push(<p key="total">{`Order Total: $${round(total)}`}</p>);
    return cards;
  }

  return <div>{createBillDisplay()}</div>;
}
