import "./footer.css";
import { Architects_Daughter } from "next/font/google";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Footer() {
  return (
    <footer>
      <div className={`footer-content ${architectsDaughter.className}`}>
        <div>Address</div>
        <div>Follow Us!</div>
        <div>Hours</div>
      </div>

      <div className="copyright">
        <p>&copy;All Rights Reserved By Rolls and Rolls </p>
      </div>
    </footer>
  );
}
