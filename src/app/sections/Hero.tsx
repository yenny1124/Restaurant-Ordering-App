import Image from "next/image";
import { Architects_Daughter, Fredoka } from "next/font/google";
import Link from "next/link";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});

const fredoka = Fredoka({ subsets: ["latin"] });
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
        <h4 className={architectsDaughter.className}>Experience</h4>
        <h3 className={architectsDaughter.className}>
          New Artistry of Sushi,
          <br />
          New Journey of Flavors!
        </h3>
        <h3 className={architectsDaughter.className}></h3>
        <Link href="order-online">Order Now!</Link>
      </div>
      <Image src="/sushiplatter.png" width={450} height={300} alt="" />
    </section>
  );
}
