"use client";
import { Architects_Daughter } from "next/font/google";
import "./menu.css";
import { ReactComponentElement, SyntheticEvent, useRef } from "react";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Menu() {
  const ref1 = useRef<HTMLDivElement>(null);
  ref1.current?.style.backgroundColor;
  let selectedCategory: HTMLElement;

  function selectCategory(category: string) {
    console.log(ref1);
    let nextCategory = document.getElementById(category);
    if (nextCategory == null) return;
    if (selectedCategory == null) {
      selectedCategory = nextCategory;
      return;
    }
    selectedCategory.classList.add("not-selected");
    selectedCategory = nextCategory;
    selectedCategory.classList.remove("not-selected");
  }

  function testing(e: SyntheticEvent) {}

  selectCategory("category1");
  return (
    <main className="menu-main">
      <h1 className={architectsDaughter.className}>Menu</h1>
      <header className="menu-navbar">
        <nav className="menu-navbar-content">
          <button onClick={() => selectCategory("category1")}>category1</button>
          <button onClick={() => selectCategory("category2")}>category2</button>
          <button onClick={() => selectCategory("category3")}>category3</button>
          <button onClick={() => selectCategory("category4")}>category4</button>
          <button onClick={testing}>category5</button>
        </nav>
      </header>

      <div className="menu-content">
        <div
          className="menu-category"
          style={{ backgroundColor: "blue" }}
          id="category1"
          ref={ref1}
        ></div>
        <div
          className="menu-category not-selected"
          style={{ backgroundColor: "red" }}
          id="category2"
        ></div>
        <div
          className="menu-category not-selected"
          style={{ backgroundColor: "green" }}
          id="category3"
        ></div>
        <div
          className="menu-category not-selected"
          style={{ backgroundColor: "yellow" }}
          id="category4"
        ></div>
        <div
          className="menu-category not-selected"
          style={{ backgroundColor: "pink" }}
          id="category5"
        ></div>
      </div>
    </main>
  );
}
