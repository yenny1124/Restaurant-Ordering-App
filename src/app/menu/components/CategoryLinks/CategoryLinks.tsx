"use client";

import React from "react";
import "./categorylinks.css";
import MenuNavbarLink from "../menunavbar/MenuNavLink";

export default function CategoryLinks(props: {
  categories: [];
  navType: string;
}) {
  function createCategoryLinks(categories: []) {
    let categoryElements: any = [];
    categoryElements = categories.map(
      (category: { _id: string; name: string; __v: number }, i) => {
        return React.createElement(
          MenuNavbarLink,
          {
            category: `${category.name}`,
            key: `menu-navbar-link-${category._id}`,
          },
          `${category.name}`
        );
      }
    );

    return <>{categoryElements}</>;
  }
  return (
    <nav className={props.navType}>{createCategoryLinks(props.categories)}</nav>
  );
}
