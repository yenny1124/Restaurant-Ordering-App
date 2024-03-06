import { Architects_Daughter } from "next/font/google";
import "./menu.css";
import CategoryLinks from "./components/categorylinks/CategoryLinks";
const architectsDaughter = Architects_Daughter({
  subsets: ["latin"],
  weight: ["400"],
});
export default async function Menu() {
  // fetch categories
  return (
    <main className="menu-main">
      <h1 className={architectsDaughter.className}>Menu</h1>
      <div className="centering-div">
        <CategoryLinks
          categories={await fetchCategories()}
          navType="menu-category"
        />
      </div>
    </main>
  );
}

const fetchCategories = async () => {
  try {
    const response = await fetch(
      "https://restaurant-ecommerce.onrender.com/api/get/categories"
    ); // Adjust URL as needed
    const data = await response.json();
    // console.log(data); // to debug
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return null;
  }
};
/*
old example using json placeholder, keeping here just in case
const getCategories = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await response.json();
  const categories = data.map((item: any) => {
    return item.userId;
  });
  return categories.filter(
    (item: string, index: number) => categories.indexOf(item) === index
  );
};
*/
