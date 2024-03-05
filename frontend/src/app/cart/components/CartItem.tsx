import "./cartitem.css";
import { CartItemType } from "@/app/types";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function CartItem(props: { item: CartItemType }) {
  const [itemQuantity, setItemQuantity] = useState(0);

  // correctly render when local storage state changes
  useEffect(() => {
    const cartCountListener = () => {
      let stringItem = localStorage.getItem(`cart-item${props.item.item._id}`);
      if (stringItem === null) {
        setItemQuantity(0);
        return;
      }
      let objectItem = JSON.parse(stringItem);
      let quantity = objectItem.quantity;
      setItemQuantity(quantity);
    };

    cartCountListener();
    window.addEventListener("storage", cartCountListener);

    return () => {
      window.removeEventListener("storage", cartCountListener);
    };
  }, [itemQuantity]);

  function decrement() {
    let stringItem = localStorage.getItem(`cart-item${props.item.item._id}`);
    if (stringItem === null) return;
    let objectItem = JSON.parse(stringItem);
    let quantity = objectItem.quantity - 1;
    if (quantity <= 0) {
      localStorage.removeItem(`cart-item${props.item.item._id}`);
    } else {
      localStorage.setItem(
        `cart-item${props.item.item._id}`,
        JSON.stringify({ item: props.item.item, quantity })
      );
    }

    let cartItems = parseInt(localStorage.getItem("cartCount") ?? "0") - 1;
    localStorage.setItem("cartCount", cartItems.toString());
    window.dispatchEvent(new Event("storage"));
  }
  function increment() {
    let stringItem = localStorage.getItem(`cart-item${props.item.item._id}`);
    if (stringItem === null) return;
    let objectItem = JSON.parse(stringItem);
    let quantity = objectItem.quantity + 1;

    localStorage.setItem(
      `cart-item${props.item.item._id}`,
      JSON.stringify({ item: props.item.item, quantity })
    );

    let cartItems = parseInt(localStorage.getItem("cartCount") ?? "0") + 1;
    localStorage.setItem("cartCount", cartItems.toString());
    window.dispatchEvent(new Event("storage"));
  }

  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <Image
          src={props.item.item.img}
          alt={props.item.item.name}
          height={100}
          width={100}
        ></Image>
      </div>
      <div className="cart-item-info">
        {props.item.item.name + " " + props.item.item.prices}

        <div className="cart-item-quantity">
          <button onClick={decrement}>-</button>
          <span>{itemQuantity}</span>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}