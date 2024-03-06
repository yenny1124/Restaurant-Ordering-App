import { ItemCard } from "../../components/itemcard/ItemCard";
import React from "react";
import "./category.css";
import CategoryContent from "../../components/CategoryContent";
import { CategoryType, ItemType } from "@/app/types";

export default async function CategoryType({
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
const fetchProductsByCategory = async (
  category: string
): Promise<Array<ItemType> | null> => {
  // FIX LATER
  // ugly way of finding category id for the current category

  let categories: []; // need to check this somehow
  try {
    const response = await fetch(
      "https://restaurant-ecommerce.onrender.com/api/get/categories"
    ); // Adjust URL as needed
    const data = await response.json();
    categories = data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    categories = [];
  }

  let categoryId: string;
  categoryId = ""; //FIX LATER
  categories.forEach((element: CategoryType) => {
    if (element.name == category.replace("-", " ")) categoryId = element._id;
  });
  try {
    if (categoryId == "") throw new Error();
    let url = `https://restaurant-ecommerce.onrender.com/api/get/products/category/${categoryId}`;
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
