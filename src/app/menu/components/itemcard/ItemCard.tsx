"use client";
import { useState, useContext, useEffect } from "react";
import "./itemcard.css";
import Image from "next/image";
import { ItemType } from "@/app/types";
import { ModalContext } from "../CategoryContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "@/app/services/cartservices";

export function ItemCard(props: ItemType) {
  const modalContext = useContext(ModalContext);
  // to avoid hydration issues with conditional rendering

  return (
    <div className="item-card">
      <div className="item-card-image">
        <Image src={props.img} alt={props.name} width={1920} height={1080} />
      </div>
      <div className="item-info">
        <h2>{props.name + " " + props.prices}</h2>
        <p className="item-desc">{props.desc}</p>
      </div>
      <div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          cursor: "pointer",
        }}
        onClick={() => {
          modalContext.setModalContent({
            _id: props._id,
            name: props.name,
            desc: props.desc,
            img: props.img,
            prices: props.prices,
            open: true,
          });
        }}
      ></div>
      <button className="add-cart-button">
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() => {
            addToCart(props._id);
          }}
          style={{ height: "25px", width: "25px" }}
        />
      </button>
    </div>
  );
}
