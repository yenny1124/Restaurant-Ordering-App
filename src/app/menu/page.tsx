import { Architects_Daughter } from "next/font/google";
import "./menu.css";
import Link from "next/link";
import MenuNavbar from "./components/MenuNavbar";
import React from "react";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});
export default async function Menu() {
  const categories = await getCategories();
  function createCategoryLinks() {
    let categoryElements: any = [];
    categories.forEach((element: string) => {
      categoryElements.push(
        React.createElement(
          Link,
          {
            href: `/menu/category-${element}`,
            key: `menu-navbar-link-${element}`,
          },
          `Category ${element}`
        )
      );
    });
    return <>{categoryElements}</>;
  }
  return (
    <main className="menu-main">
      <h1 className={architectsDaughter.className}>Menu</h1>
      <nav className="menu-category">{createCategoryLinks()}</nav>
    </main>
  );
}
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
