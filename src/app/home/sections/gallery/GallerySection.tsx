import FeaturedItem from "./components/FeaturedItem";
import "./gallerysection.css";
import { Architects_Daughter } from "next/font/google";
import Link from "next/link";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});
export default function GallerySection() {
  return (
    <section className="gallery-section">
      <h1 className={architectsDaughter.className}>Menu</h1>
      <div className="gallery-content">
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
        <FeaturedItem />
      </div>
      <Link href="/menu" className="button-lg">
        See More!
      </Link>
    </section>
  );
}
