import { ItemCard } from "../components/itemcard/ItemCard";
import React from "react";
import "./category.css";
export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const items = await fetchProductsByCategory(params.category);

  async function createCards() {
    if (items == null || items == undefined) return;
    let itemCards: any = [];
    items.forEach((element: { _id: string; name: string; desc: string }) => {
      let itemCard = React.createElement(ItemCard, {
        name: element.name,
        desc: element.desc,
        key: `item-card-${element._id}`,
      });
      itemCards.push(itemCard);
    });

    return React.createElement(
      "div",
      { className: "menu-category", key: "cards" + params.category },
      itemCards
    );
  }

  return (
    <main>
      <div className="centering-div">{/*createCards()*/}</div>
    </main>
  );
}

const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:3003/api/get/categories"); // Adjust URL as needed
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};
// Fetch products by selected category
const fetchProductsByCategory = async (category: string) => {
  // FIX LATER
  // ugly way of finding category id for the current category
  let categories: []; // need to check this somehow
  try {
    const response = await fetch("http://localhost:3003/api/get/categories"); // Adjust URL as needed
    const data = await response.json();
    categories = data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    categories = [];
  }

  let categoryId: string;
  categoryId = "i am putting this here so typescript is happy"; //FIX LATER
  categories.forEach((element: { _id: string; name: string; __v: number }) => {
    //console.log(element.name + category);
    if (element.name == category.replace("-", " ")) categoryId = element._id;
  });
  try {
    let url = `http://localhost:3003/api/get/products/category/${categoryId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

/* old example using json placeholder
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
*/
