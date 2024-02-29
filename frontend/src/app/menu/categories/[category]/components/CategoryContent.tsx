"use client";
import React, { createContext, useState } from "react";

import { ItemCard } from "./itemcard/ItemCard";
import { ItemType } from "@/app/types";
import ItemModal from "./itemmodal/ItemModal";

interface ModalContext {
  modalContent: ItemType;
  setModalContent: React.Dispatch<React.SetStateAction<ItemType>>;
}

const defaultItemType = {
  _id: "loading",
  name: "loading",
  desc: "loading",
  img: "loading",
  prices: [0],
};
export const ModalContext = React.createContext<ModalContext>({
  modalContent: defaultItemType,
  setModalContent: () => {},
});

export default function CategoryContent(props: {
  items: Array<ItemType> | null;
}) {
  const [modalContent, setModalContent] = useState<ItemType>(defaultItemType);

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
