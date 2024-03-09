import "./cartitem.css";
import { ItemType } from "@/app/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  decrementItem,
  getItemAdditionalDetails,
  incrementItem,
} from "@/app/services/cartservices";
import { getItemQuantity } from "@/app/services/cartservices";
export default function CartItem(props: { item: ItemType; quantity: number }) {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [additionalDetails, setAdditionalDetails] = useState("");

  // correctly render when local storage state changes
  useEffect(() => {
    wrapperListener();
    window.addEventListener("storage", wrapperListener);
    return () => {
      window.removeEventListener("storage", wrapperListener);
    };
  }, [itemQuantity, additionalDetails]);

  const wrapperListener = () => {
    cartCountListener();
    textareaListener();
  };
  const cartCountListener = () => {
    let stringItem = localStorage.getItem(`cart-item${props.item._id}`);
    if (stringItem === null) {
      setItemQuantity(0);
      return;
    }
    let objectItem = JSON.parse(stringItem);
    let quantity = objectItem.quantity;
    setItemQuantity(quantity);
  };
  const textareaListener = () => {
    let details = getItemAdditionalDetails(props.item._id);
    if (details !== null && details !== undefined) {
      setAdditionalDetails(details);
      console.log(details);
    }
  };

  return (
    <div className="cart-item-holder">
      <div className="cart-item">
        <div className="cart-item-image">
          <Image
            src={props.item.img}
            alt={props.item.name}
            height={100}
            width={100}
          ></Image>
        </div>
        <div className="cart-item-info">
          <h2>{`${props.item.name} x${props.quantity}`}</h2>
          <p>{`${props.item.prices}`}</p>
          {additionalDetails && !(additionalDetails == "") && (
            <p style={{ color: "grey" }}>
              Additional Details: {additionalDetails}
            </p>
          )}
        </div>
      </div>
      <div className="cart-item-quantity-holder">
        <div className="cart-item-quantity">
          <button
            onClick={() => {
              decrementItem(props.item._id);
            }}
          >
            -
          </button>
          <span>{itemQuantity}</span>
          <button
            onClick={() => {
              incrementItem(props.item._id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
