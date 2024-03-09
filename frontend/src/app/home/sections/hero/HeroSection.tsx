import Image from "next/image";
import "./herosection.css";
import Link from "next/link";
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
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div className="roll1">Rolls&nbsp;&&nbsp;Rolls</div>
          </div>
        </h1>
        <Image src="/sushiicon.png" width={250} height={250} alt="" />
        <p className={`${architectsDaughter.className} special-paragraph`}>
          Experience
        </p>
        <p className={architectsDaughter.className}>
          New Artistry of Sushi,
          <br />
          New Journey of Flavors!
        </p>
        <Link href="/menu" className="button-lg">
          Order Now!
        </Link>
      </div>
      <Image src="/sushiplatter.png" width={450} height={300} alt="" />
    </section>
  );
}
