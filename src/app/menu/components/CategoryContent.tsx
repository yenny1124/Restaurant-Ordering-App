"use client";
import React, { createContext, useState, useRef } from "react";

import { ItemCard } from "./itemcard/ItemCard";
import { ItemType } from "@/app/types";
import ItemModal from "./itemmodal/ItemModal";

interface ModalContext {
  modalContent: ModalType;
  setModalContent: React.Dispatch<React.SetStateAction<ModalType>>;
}

type ModalType = {
  _id: string;
  name: string;
  desc: string;
  img: string;
  prices: number[];
  open: boolean;
};

const defaultItemType = {
  _id: "loading",
  name: "loading",
  desc: "loading",
  img: "loading",
  prices: [0],
  open: false,
};
export const ModalContext = React.createContext<ModalContext>({
  modalContent: defaultItemType,
  setModalContent: () => {},
});

export default function CategoryContent(props: {
  items: Array<ItemType> | null;
}) {
  const [modalContent, setModalContent] = useState<ModalType>(defaultItemType);
  function createCards() {
    if (props.items == null) return;
    let itemCards: any = [];
    try {
      props.items.forEach((element: ItemType) => {
        let itemCard = React.createElement(ItemCard, {
          name: element.name,
          desc: element.desc,
          key: `item-card-${element._id}`,
          img: element.img,
          prices: element.prices,
          _id: element._id,
        });
        itemCards.push(itemCard);
      });
    } catch (error) {
      return <h2>An error occured</h2>;
    }

    return itemCards;
  }

  return (
    <>
      <ModalContext.Provider value={{ modalContent, setModalContent }}>
        <ItemModal />
        {createCards()}
      </ModalContext.Provider>
    </>
  );
}
