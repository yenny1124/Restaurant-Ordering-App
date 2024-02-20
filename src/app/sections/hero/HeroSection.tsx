import Image from "next/image";
import "./herosection.css";
import Link from "next/link";
import LinkButton from "@/app/components/linkbutton/LinkButton";
import { Architects_Daughter } from "next/font/google";

const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div>
        <h1 className={architectsDaughter.className}>
          Welcome&nbsp;to
          <br />
          Rolls&nbsp;&&nbsp;Rolls
        </h1>
        <Image src="/sushi.png" width={250} height={250} alt="" />
        <p
          className={architectsDaughter.className}
          style={{ margin: "10px", fontSize: "20px" }}
        >
          <b>Experience</b>
        </p>
        <p className={architectsDaughter.className}>
          New Artistry of Sushi,
          <br />
          New Journey of Flavors!
        </p>
        <LinkButton link="order-online" text="Order Now!" />
      </div>
      <Image src="/sushiplatter.png" width={450} height={300} alt="" />
    </section>
  );
}
