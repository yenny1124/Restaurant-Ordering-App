"use client";
import { useState } from "react";
import "./itemcard.css";
import Image from "next/image";

type ItemTable = {
  _id: string;
  name: string;
  desc: string;
  img: string;
  prices: Array<number>;
};
export function ItemCard(props: ItemTable) {
  const [modalState, setModalState] = useState(false);
  function modalOn() {
    setModalState(true);
  }
  function modalOff() {
    setModalState(false);
  }
  return (
    <div className="item-card">
      <button className="button open-modal" onClick={modalOn}>
        open modal
      </button>
      <h2>{props.name}</h2>
      <div className="item-card-image">
        <img src={props.img} alt={props.name} width="100%" />
      </div>
      <p>{props.prices}</p>
      <dialog className="modal" open={modalState}>
        <h2>{props.name}</h2>
        <div className="item-card-image">
          <img src={props.img} alt={props.name} width="200px" height="200px" />
        </div>
        <p>{props.prices}</p>
        <p>{props.desc}</p>
        <button className=" button close-button" onClick={modalOff}></button>
      </dialog>
    </div>
  );
}
