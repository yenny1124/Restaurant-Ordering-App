"use client";
import { useState, useContext } from "react";
import "./itemcard.css";
import Image from "next/image";
import { ItemType } from "@/app/types";

import { ModalContext } from "../CategoryContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export function ItemCard(props: ItemType) {
  const modalContext = useContext(ModalContext);

  return (
    <div className="item-card">
      <div className="item-card-image">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="item-info">
        <h2>{props.name}</h2>
        <p>{props.prices}</p>
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
            console.log("add to cart goes here");
          }}
          style={{ height: "25px", width: "25px", color: "black" }}
        />
      </button>
    </div>
  );
}
