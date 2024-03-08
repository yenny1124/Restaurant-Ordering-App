import Link from "next/link";
import "./linkbutton.css";
export default function LinkButton(props: { link: string; text: string }) {
  return (
    <Link className="button-lg" href={props.link}>
      {props.text}
    </Link>
  );
}
