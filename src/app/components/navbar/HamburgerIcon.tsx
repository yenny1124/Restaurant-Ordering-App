"use client";

import { useState } from "react";

export default function HamburgerIcon() {
  const [hamburgerOn, toggleHamburger] = useState(false);
  function buttonClicked() {
    toggleHamburger(!hamburgerOn);
    const menu = document.querySelector<HTMLElement>(".hamburger-menu");
    if (menu === null) {
      console.log("no burger menu found in document");
      return;
    }
    if (hamburgerOn) {
      menu.style.transform = "translateX(0%)";
    } else {
      menu.style.transform = "translateX(-100%)";
    }
  }
  return (
    <div className="burger-icon" onClick={buttonClicked}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 18L20 18"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 12L20 12"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4 6L20 6"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
