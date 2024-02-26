import Link from "next/link";
import React from "react";
import "./menunavbar.css";
import CategoryLinks from "../CategoryLinks/CategoryLinks";
export default async function MenuNavbar() {
  return (
    <header className="menu-navbar">
      <CategoryLinks
        categories={await fetchCategories()}
        navType="menu-navbar-content"
      />
    </header>
  );
}

// fetch categories
const fetchCategories = async () => {
  try {
    const response = await fetch("http://localhost:3003/api/get/categories"); // Adjust URL as needed
    const data = await response.json();
    // console.log(data); // to debug
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};

/* old example using json placeholder
const getCategories = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await response.json();
  const categories = data.map((item: any) => {
    return item.userId;
  });
  return categories.filter(
    (item: string, index: number) => categories.indexOf(item) === index
  );
};
*/
