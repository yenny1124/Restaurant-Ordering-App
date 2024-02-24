import { ItemCard } from "../components/itemcard/ItemCard";
import React from "react";
import "./category.css";
export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const items = await getItems();

  function createCards() {
    let itemCards: any = [];
    items.forEach(
      (element: {
        category: string;
        itemName: string;
        itemDescription: string;
      }) => {
        if ("category-" + element.category != params.category) {
          return;
        }
        let itemCard = React.createElement(ItemCard, {
          itemName: element.itemName,
          itemDescription: element.itemDescription,
          key: `item-card-${element.category + element.itemName}`,
        });
        itemCards.push(itemCard);
      }
    );

    return React.createElement(
      "div",
      { className: "menu-category", key: "cards" + params.category },
      itemCards
    );
  }

  return (
    <main>
      <div className="centering-div">{createCards()}</div>
    </main>
  );
}
const getItems = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await response.json();
  const categories = data.map((item: any) => {
    return {
      category: item.userId,
      itemName: item.title,
      itemDescription: item.body,
    };
  });
  return categories;
};
