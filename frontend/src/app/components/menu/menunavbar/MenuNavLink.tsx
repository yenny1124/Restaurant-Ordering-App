"use client";

import "./menunavbar.css";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuNavbarLink = (props: { category: string }) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [selectedClass, setClass] = useState("");
  const pathname = usePathname();
  const lastPath = pathname.substring(
    pathname.lastIndexOf("/") + 1,
    pathname.length
  );

  const categoryPathName = props.category
    .replaceAll(" ", "-")
    .replaceAll("/", "&");

  useEffect(() => {
    if (lastPath == categoryPathName) {
      setClass("current-category");
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    } else {
      setClass("");
    }
  }, [lastPath, props, categoryPathName]);

  return (
    <Link
      href={`/menu/categories/${categoryPathName}`}
      key={`menu-navbar-link-${categoryPathName}`}
      className={selectedClass}
      ref={ref}
    >
      {props.category}
    </Link>
  );
};
export default MenuNavbarLink;
