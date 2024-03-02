"use client";
import { useState, useContext, useEffect } from "react";
import "./itemcard.css";
import Image from "next/image";
import { ItemType } from "@/app/types";
import { ModalContext } from "../CategoryContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export function ItemCard(props: ItemType) {
  const modalContext = useContext(ModalContext);
  const [isClient, setIsClient] = useState(false); // to avoid hydration issues with conditional rendering

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="item-card">
      <div className="item-card-image">
        <Image src={props.img} alt={props.name} width={100} height={100} />
      </div>
      <div className="item-info">
        <h2>{props.name}</h2>
        <p>{props.prices}</p>
        {isClient && window.innerWidth > 575 && (
          <p style={{ fontSize: "1.25rem" }}>{props.desc}</p>
        )}
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
