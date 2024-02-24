import "./menunavbar.css";
import React from "react";
import Link from "next/link";
export default function MenuNavbarLink(props: { element: string }) {
  return React.createElement(
    Link,
    {
      href: `/menu/category-${props.element}`,
      key: `menu-navbar-link-${props.element}`,
    },
    `Category ${props.element}`
  );
}
