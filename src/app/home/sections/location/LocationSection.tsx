import { Architects_Daughter } from "next/font/google";
import "./locationsection.css";
import LinkButton from "@/app/components/linkbutton/LinkButton";
import Map from "@/app/components/map/Map";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-section-details">
        <div>
          <h1 className={architectsDaughter.className}>Address</h1>
          <address>
            <p>11011 NE 12th St c1, Bellevue, WA 98004</p>
          </address>
          <h1 className={architectsDaughter.className}>Opening Hours</h1>
          <time>
            <p>
              Tuesday - Saturday <br />
              10:30 am - 9:00 pm
            </p>
          </time>
        </div>

        <LinkButton text="Book Now!" link="booktable" />
      </div>
      <div className="location-section-map">
        <Map />
      </div>
    </section>
  );
}
