import MenuItem from "@/app/components/menuitem/MenuItem";
import "./gallerysection.css";
import { Architects_Daughter } from "next/font/google";
import Link from "next/link";
import LinkButton from "@/app/components/linkbutton/LinkButton";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});
export default function GallerySection() {
  return (
    <section className="gallery-section">
      <h1 className={architectsDaughter.className}>Menu</h1>
      <div className="gallery-content">
        <MenuItem />
        <MenuItem />

        <MenuItem />
        <MenuItem />
      </div>
      <LinkButton text="See More!" link="menu" />
    </section>
  );
}
