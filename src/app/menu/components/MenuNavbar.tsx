import Link from "next/link";
import React from "react";
export default async function MenuNavbar() {
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
    return React.createElement("div", {}, categoryElements);
  }
  return (
    <header className="menu-navbar">
      <nav className="menu-navbar-content">{createCategoryLinks()}</nav>
    </header>
  );
}

export const getCategories = async () => {
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
