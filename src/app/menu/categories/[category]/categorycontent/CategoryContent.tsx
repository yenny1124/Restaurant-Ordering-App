"use client";
import React, { createContext, useState, useRef } from "react";

import { ItemCard } from "../../components/itemcard/ItemCard";
import { ItemType } from "@/app/types";
import ItemModal from "../../components/itemmodal/ItemModal";
import { useEffect } from "react";
import { fetchProductsByCategory } from "@/app/services/fetchservices";
import { ModalType } from "@/app/types";
import { defaultItemType } from "@/app/types";

interface ModalContext {
  modalContent: ModalType;
  setModalContent: React.Dispatch<React.SetStateAction<ModalType>>;
}

export const ModalContext = React.createContext<ModalContext>({
  modalContent: defaultItemType,
  setModalContent: () => {},
});

export default function CategoryContent(props: { category: string }) {
  const [modalContent, setModalContent] = useState<ModalType>(defaultItemType);
  const [items, setItems] = useState<ItemType[] | null>(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await fetchProductsByCategory(props.category);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchItems();
  }, []);

  function createCards() {
    if (items == null) {
      return <p>loading items...</p>;
    }
    let itemCards: any = [];
    try {
      items.forEach((element: ItemType) => {
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
