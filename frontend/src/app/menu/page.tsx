"use client";

import React from "react";
import { useState, useEffect } from "react";
import "./menu.css";
import MenuNavbarLink from "../components/menu/menunavbar/MenuNavLink";
import { fetchCategories } from "@/app/services/fetchservices";
import { Architects_Daughter } from "next/font/google";
import { CategoryType } from "../types";
import { FunctionComponentElement } from "react";
import "./menu.css";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Menu() {
  const [categories, setCategories] = useState<Array<CategoryType>>([]);

  useEffect(() => {
    const asyncFetchCategories = async () => {
      try {
        fetchCategories().then((categories) => {
          setCategories(categories);
        });
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    asyncFetchCategories();
  }, []);

  return (
    <main className="menu-main">
      <h1 className={architectsDaughter.className}>Menu</h1>
      <div className="centering-div">
        <nav className="menu-category">
          {!Array.isArray(categories) ||
            (!categories.length && <p>loading categories...</p>)}
          {createCategoryLinks(categories)}
        </nav>
      </div>
    </main>
  );
}

function createCategoryLinks(categories: Array<CategoryType>) {
  let categoryElements: FunctionComponentElement<{ category: string }>[] = [];
  categoryElements = categories.map((category: CategoryType, i) => {
    return React.createElement(
      MenuNavbarLink,
      {
        category: `${category.name}`,
        key: `menu-navbar-link-${category._id}`,
      },
      `${category.name}`
    );
  });

  return <>{categoryElements}</>;
}
