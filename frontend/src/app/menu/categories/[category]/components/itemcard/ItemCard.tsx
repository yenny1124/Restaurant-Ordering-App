"use client";
import { useState, useContext } from "react";
import "./itemcard.css";
import Image from "next/image";
import { ItemType } from "@/app/types";

import { ModalContext } from "../CategoryContent";
export function ItemCard(props: ItemType) {
  const modalContext = useContext(ModalContext);

  return (
    <div
      className="item-card"
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
    >
      <h2>{props.name}</h2>
      <div className="item-card-image">
        <img src={props.img} alt={props.name} width="100%" />
      </div>
      <p>{props.prices}</p>
    </div>
  );
}
