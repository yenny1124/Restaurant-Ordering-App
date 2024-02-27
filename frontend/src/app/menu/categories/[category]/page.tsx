import { ItemCard } from "../components/itemcard/ItemCard";
import React from "react";
import "./category.css";
import CategoryContent from "./components/CategoryContent";
type CategoryTable = { _id: string; name: string; __v: number };
type ItemTable = { _id: string; name: string; desc: string };

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  return (
    <main>
      <div className="centering-div">
        <div className="menu-category">
          <CategoryContent
            items={await fetchProductsByCategory(params.category)}
          />
        </div>
      </div>
    </main>
  );
}

// Fetch products by selected category
const fetchProductsByCategory = async (
  category: string
): Promise<Array<ItemTable> | null> => {
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
  categories.forEach((element: CategoryTable) => {
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
