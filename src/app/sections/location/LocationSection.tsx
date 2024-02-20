import Image from "next/image";
import { Architects_Daughter } from "next/font/google";
import "./locationsection.css";
import Link from "next/link";
import LinkButton from "@/app/components/linkbutton/LinkButton";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function LocationSection() {
  return (
    <section className="location-section">
      <div className="location-section-details">
        <h1 className={architectsDaughter.className}>Address</h1>
        <p>11011 NE 12th St c1, Bellevue, WA 98004</p>
        <h1 className={architectsDaughter.className}>Opening Hours</h1>
        <p>
          Tuesday - Saturday <br />
          10:30 am - 9:00 pm
        </p>
        <LinkButton text="Book Now!" link="booktable" />
      </div>
      <div className="location-section-api"></div>
    </section>
  );
}
