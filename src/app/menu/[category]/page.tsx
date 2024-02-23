import { create } from "domain";
import { ItemCard } from "../components/ItemCard";
import React from "react";
import "./category.css";
import MenuNavbar from "../components/MenuNavbar";
export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const items = await getItems();

  function createCards() {
    let itemCards: any = [];
    items.forEach((element: { itemName: string; itemDescription: string }) => {
      let itemCard = React.createElement(ItemCard, {
        itemName: element.itemName,
        itemDescription: element.itemDescription,
        key: `item-card-${element.itemName}`,
      });

      itemCards.push(itemCard);
    });

    return React.createElement("div", {}, itemCards);
  }

  return (
    <div className="category-page">
      <MenuNavbar />
      {params.category}
      {createCards()}
    </div>
  );
}

const getItems = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await response.json();
  const categories = data.map((item: any) => {
    return { itemName: item.title, itemDescription: item.body };
  });
  return categories.filter(
    (item: string, index: number) => categories.indexOf(item) === index
  );
};
