"use client";
import { useState, useContext, useEffect } from "react";
import "./itemcard.css";
import Image from "next/image";
import { ItemType } from "@/app/types";
import { ModalContext } from "../../[category]/components/CategoryContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function ItemCard(props: ItemType) {
  const modalContext = useContext(ModalContext);
  const [isClient, setIsClient] = useState(false);
  const [screenSize, setScreenSize] = useState("sm");
  // to avoid hydration issues with conditional rendering
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth <= 575) setScreenSize("sm");
      else setScreenSize("md");
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // adds a single item to local storage, if it already exists the quantity is incremented
  function addToCart() {
    if (
      localStorage.getItem("cartCount") === null ||
      localStorage.getItem("cartCount") == "NaN"
    ) {
      localStorage.setItem("cartCount", "0");
    }
    let numItems = parseInt(localStorage.getItem("cartCount") ?? "0") + 1;
    localStorage.setItem("cartCount", numItems.toString());

    let item = localStorage.getItem(`cart-item${props._id}`);
    let quantity =
      item === null ? 0 : parseInt(JSON.parse(item ?? "").quantity ?? "0");
    quantity++;

    localStorage.setItem(
      `cart-item${props._id}`,
      JSON.stringify({ item: props, quantity })
    );
    window.dispatchEvent(new Event("storage"));
  }

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
          onClick={addToCart}
          style={{ height: "25px", width: "25px" }}
        />
      </button>
    </div>
  );
}
