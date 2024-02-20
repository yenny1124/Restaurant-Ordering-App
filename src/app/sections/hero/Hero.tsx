import Image from "next/image";
import { Architects_Daughter } from "next/font/google";
import "./hero.css";
import Link from "next/link";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Hero() {
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
        <Link href="order-online" >
          Order Now!
        </Link>
      </div>
      <Image src="/sushiplatter.png" width={450} height={300} alt="" />
    </section>
  );
}
