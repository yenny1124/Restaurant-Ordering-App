import ConveyorBelt from "../conveyorbelt/ConveyorBelt";
import "./footer.css";
import { Architects_Daughter } from "next/font/google";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});
export default function Footer() {
  return (
    <footer>
      <ConveyorBelt />
      <div className={`footer-content`}>
        <address className="footer-content-section">
          <h1
            className={`footer-content-section ${architectsDaughter.className}`}
          >
            Address
          </h1>
          <p>11011 NE 12th St c1, Bellevue, WA 98004</p>
        </address>
        <div className="footer-content-section">
          <h1
            className={`footer-content-section ${architectsDaughter.className}`}
          >
            Opening Hours
          </h1>
          <p>
            Tuesday - Saturday <br />
            10:30 am - 9:00 pm
          </p>
        </div>
        <div className="footer-content-section">
          <h1
            className={`footer-content-section ${architectsDaughter.className}`}
          >
            Contacts
          </h1>
          <p>put phone number here and email here</p>
        </div>
      </div>

      <div className="copyright">
        <p>&copy;All Rights Reserved By Rolls and Rolls </p>
      </div>
    </footer>
  );
}
