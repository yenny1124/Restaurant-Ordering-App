"use client";

import React, { ReactComponentElement, ReactHTML, useRef } from "react";
import "./categorylinks.css";
import MenuNavbarLink from "../menunavbar/MenuNavLink";
export default function CategoryLinks(props: {
  categories: [];
  navType: string;
}) {
  let ref = useRef<Array<HTMLDivElement | null>>([]);
  function scrollToLink(i: number) {
    ref.current[i]?.scrollIntoView({ behavior: "smooth", inline: "center" });
  }

  function createCategoryLinks(categories: []) {
    let categoryElements: any = [];
    categoryElements = categories.map(
      (category: { _id: string; name: string; __v: number }, i) => {
        return React.createElement(
          MenuNavbarLink,
          {
            category: `${category.name}`,
            key: `menu-navbar-link-${category._id}`,
            ref: (element) => (ref.current[i] = element),
            scrollingFunction: scrollToLink,
            refIndex: i,
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
