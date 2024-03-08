import React from "react";
import "./category.css";
import CategoryContent from "./CategoryContent";

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  return (
    <main>
      <div className="centering-div">
        <div className="menu-category">
          <CategoryContent category={params.category} />
        </div>
      </div>
    </main>
  );
}
