"use client";
import { CartItemType } from "../../../types";
import React from "react";
import "./itemizedbill.css";
import Link from "next/link";

export default function ItemizedBill(props: {
  items: Array<CartItemType>;
  button?: string;
}) {
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
    cards.push(
      <h2
        key="total"
        style={{
          paddingTop: "24px",
          borderBottom: "2px solid black",
          borderTop: "2px solid black",
          fontWeight: "normal",
          textAlign: "center",
          paddingBottom: "24px",
        }}
      >{`Order Total: $${round(total)}`}</h2>
    );
    return cards;
  }

  return (
    <div className="cart-bill">
      <div>
        <h2
          style={{
            fontWeight: "normal",
            borderBottom: "2px solid black",
            textAlign: "center",
            paddingBottom: "24px",
          }}
        >
          Order Summary
        </h2>
        {!Array.isArray(props.items) ||
          (!props.items.length && <p>loading order summary...</p>)}
        {createBillDisplay()}
      </div>
      {props.button && (
        <Link className="button-lg" href="/checkout">
          Checkout
        </Link>
      )}
    </div>
  );
}
