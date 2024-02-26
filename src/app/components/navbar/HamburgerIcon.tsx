import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./hamburger.css";

export default function HamburgerIcon(props: any) {
  return (
    <div className="burger-icon" onClick={props.onClick}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
}
