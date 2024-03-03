"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
export default function NavBarLink(props: { path: string; text: string }) {
  const [selectedClass, setClass] = useState("");

  const pathname = usePathname();
  const lastPath = pathname.substring(
    pathname.lastIndexOf("/"),
    pathname.length
  );

  useEffect(() => {
    if (lastPath == props.path) {
      setClass("current-page");
    } else {
      setClass("");
    }
  }, [lastPath, props, props.path]);

  return (
    <Link href={`${props.path}`} className={`navbar-link ${selectedClass}`}>
      {props.text}
    </Link>
  );
}
