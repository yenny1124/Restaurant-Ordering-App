"use client";
import Link from "next/link";
import { useEffect, useState, ReactNode } from "react";
import { usePathname } from "next/navigation";
export default function MainNavBarLink(props: {
  path: string;
  text: string;
  children?: ReactNode;
}) {
  const [selectedClass, setClass] = useState("");

  const pathname = usePathname();
  const lastPath = pathname.substring(
    pathname.lastIndexOf("/"),
    pathname.length
  );

  useEffect(() => {
    if (pathname.includes(props.path.substring(1, props.path.length))) {
      setClass("current-page");
    } else {
      setClass("");
    }
  }, [lastPath, props, props.path]);

  return (
    <Link
      href={`${props.path}`}
      className={`main-navbar-link ${selectedClass}`}
    >
      {props.text}
      {props.children}
    </Link>
  );
}