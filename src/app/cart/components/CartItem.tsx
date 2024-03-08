import "./cartitem.css";
import { ItemType } from "@/app/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { decrementItem, incrementItem } from "@/app/services/cartservices";
import { getItemQuantity } from "@/app/services/cartservices";
export default function CartItem(props: { item: ItemType; quantity: number }) {
  const [itemQuantity, setItemQuantity] = useState(0);

  // correctly render when local storage state changes
  useEffect(() => {
    cartCountListener();
    window.addEventListener("storage", () => {
      setItemQuantity(getItemQuantity(props.item._id));
    });

    return () => {
      window.removeEventListener("storage", cartCountListener);
    };
  }, [itemQuantity]);

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
