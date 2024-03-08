import { Architects_Daughter } from "next/font/google";
import "./menu.css";
import MenuCategoryLinks from "./components/categorylinks/MenuCategoryLinks";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});
export default async function Menu() {
  return (
    <main className="menu-main">
      <h1 className={architectsDaughter.className}>Menu</h1>
      <div className="centering-div">
        <MenuCategoryLinks navType="menu-category" />
      </div>
    </main>
  );
}
