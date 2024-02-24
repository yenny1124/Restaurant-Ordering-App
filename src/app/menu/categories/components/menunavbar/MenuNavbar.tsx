import Link from "next/link";
import React from "react";
import "./menunavbar.css";
import MenuNavbarLink from "./MenuNavLink";
export default async function MenuNavbar() {
  const categories = await getCategories();
  function createCategoryLinks() {
    let categoryElements: any = [];
    categories.forEach((element: string) => {
      categoryElements.push(
        <MenuNavbarLink category={element} key={element} />
      );
    });
    return <>{categoryElements}</>;
  }
  return (
    <header className="menu-navbar">
      <nav className="menu-navbar-content">{createCategoryLinks()}</nav>
    </header>
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
