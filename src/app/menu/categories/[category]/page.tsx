import { ItemCard } from "../../components/itemcard/ItemCard";
import React from "react";
import "./category.css";
import CategoryContent from "../../components/CategoryContent";
import { CategoryType, ItemType } from "@/app/types";
import { fetchCategories } from "@/app/fetches";
import { fetchProductsByCategory } from "@/app/fetches";

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
// !IMPORTANT! FIX LATER category from URL is being used for fetching items, potential sql injection vulnerability

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
