import Link from "next/link";
import Image from "next/image";
import "./logolink.css";
export default function LogoLink(props: {
  imageUrl: string;
  altText: string;
  width: number;
  height: number;
}) {
  return (
    <Link
      href="/home"
      className="logo-link hover-tilt"
      style={{ height: props.height }}
    >
      <Image
        width={props.width}
        height={props.height}
        src={props.imageUrl}
        alt={props.altText}
        style={{ height: "100%" }}
      />
    </Link>
  );
}
