"use client";

import "./menunavbar.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuNavbarLink(props: { category: string }) {
  const [selectedClass, setClass] = useState("");
  const pathname = usePathname();
  const lastPath = pathname.substring(
    pathname.lastIndexOf("/") + 1,
    pathname.length
  );

  useEffect(() => {
    if (lastPath == "category-" + props.category) {
      setClass("current-category");
    } else {
      setClass("");
    }
  }, [lastPath, props.category]);

  /*
  if (lastPath == props.category) {
    setClass("current-category");
  } else {
    setClass("");
  }

  */
  return (
    <Link
      href={`/menu/categories/category-${props.category}`}
      key={`menu-navbar-link-${props.category}`}
      className={selectedClass}
    >
      Category {props.category}
    </Link>
  );
}
