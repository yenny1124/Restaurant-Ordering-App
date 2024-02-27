import React from "react";
import { ItemCard } from "./itemcard/ItemCard";
type ItemTable = {
  _id: string;
  name: string;
  desc: string;
  img: string;
  prices: Array<number>;
};

export default function CategoryContent(props: {
  items: Array<ItemTable> | null;
}) {
  console.log(props.items);

  function createCards() {
    if (props.items == null) return;
    let itemCards: any = [];
    try {
      props.items.forEach((element: ItemTable) => {
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

  return <>{createCards()}</>;
}
