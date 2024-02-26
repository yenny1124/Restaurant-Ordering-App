"use client";

import "./menunavbar.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef } from "react";

const MenuNavbarLink = forwardRef<
  HTMLDivElement,
  { category: string; scrollingFunction: any; refIndex: number }
>(
  (
    props: { category: string; scrollingFunction: any; refIndex: number },
    ref: any
  ) => {
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
        props.scrollingFunction(props.refIndex);
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
  }
);
MenuNavbarLink.displayName = "MenuNavbarLink";
export default MenuNavbarLink;
