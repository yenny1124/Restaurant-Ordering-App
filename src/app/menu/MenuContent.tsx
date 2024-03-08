"use client";

import React from "react";
import { useState, useEffect } from "react";
import "./menu.css";
import MenuNavbarLink from "../components/menu/menunavbar/MenuNavLink";
import { fetchCategories } from "@/app/services/fetchservices";

export default function MenuCategoryLinks(props: { navType: string }) {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategoriesData = async () => {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategoriesData();
  }, []);

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
    <nav className={props.navType}>
      {!categories && <p>loading categories...</p>}
      {categories && createCategoryLinks(categories)}
    </nav>
  );
}
