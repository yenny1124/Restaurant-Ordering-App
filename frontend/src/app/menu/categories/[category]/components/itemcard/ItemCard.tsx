"use client";
import { useState } from "react";
import "./itemcard.css";
import Image from "next/image";
import { ItemType } from "@/app/types";

export function ItemCard(props: ItemType) {
  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <div className="item-card-image">
        <img src={props.img} alt={props.name} width="100%" />
      </div>
      <p>{props.prices}</p>
    </div>
  );
}
