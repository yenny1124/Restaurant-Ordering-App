import { CategoryType, ItemType } from "./types";

const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://restaurant-ecommerce.onrender.com/api/get/categories"
    ); // Adjust URL as needed
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
    let url = `https://restaurant-ecommerce.onrender.com/api/get/products/category/${categoryId}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
};

export { fetchCategories, fetchProductsByCategory };
