import React from "react";
import "./menunavbar.css";
import CategoryLinks from "../categorylinks/CategoryLinks";
import { fetchCategories } from "@/app/services/fetchservices";

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
