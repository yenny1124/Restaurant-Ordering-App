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
        <div>
          <h1>Address</h1>
          <address>11011 NE 12th St c1, Bellevue, WA 98004</address>
        </div>
        <div>
          <h1>Opening Hours</h1>
        </div>
        <div>
          <h1>Contacts</h1>
        </div>
      </div>

      <div className="copyright">
        <p>&copy;All Rights Reserved By Rolls and Rolls </p>
      </div>
    </footer>
  );
}
