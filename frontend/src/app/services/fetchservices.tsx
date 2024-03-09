import { CategoryType, ItemType, CartItemType } from "../types";
import { backendHostName } from "../backendhostname";
const fetchCategories = async () => {
  try {
    const response = await fetch(`${backendHostName}/api/get/categories`); // Adjust URL as needed
    const data = await response.json();
    // console.log(data); // to debug
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};

const fetchProductsByCategory = async (
  category: string
): Promise<Array<ItemType> | null> => {
  let categories = await fetchCategories();
  let categoryId: string;
  categoryId = ""; //FIX LATER
  categories.forEach((element: CategoryType) => {
    if (element.name == category.replace("-", " ")) categoryId = element._id;
  });
  try {
    if (categoryId == "") throw new Error();
    let url = `${backendHostName}/api/get/products/category/${categoryId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

const fetchCartItems = async () => {
  if (typeof localStorage === "undefined") {
    return [];
  }
  const keys = Object.keys(localStorage);
  let items: Array<CartItemType> = [];

  await Promise.all(
    keys.map(async (key: string) => {
      if (!key.includes("cart-item")) return [];
      const stringValue = localStorage.getItem(key);
      if (stringValue === null) return [];
      const objectValue = JSON.parse(stringValue);
      let response;
      if (objectValue === undefined) return [];

      response = await fetch(
        `${backendHostName}/api/get/product/${objectValue._id}`
      );

      if (!response.ok) {
        console.log(`Could not retrieve ${objectValue._id} item from database`);
        return [];
      }

      const item = await response.json();
      items.push({ item, quantity: objectValue.quantity });
    })
  );

  return items;
};

export { fetchCategories, fetchProductsByCategory, fetchCartItems };
