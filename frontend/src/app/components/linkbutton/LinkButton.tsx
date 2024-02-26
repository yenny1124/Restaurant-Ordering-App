import Link from "next/link";
import "./linkbutton.css";
export default function LinkButton(props: any) {
  return (
    <Link className="link-button" href={props.link}>
      {props.text}
    </Link>
  );
}
