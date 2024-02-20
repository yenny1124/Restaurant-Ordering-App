import "./menuitem.css";

export default function MenuItem() {
  let numItems = 0;
  let itemName = "Tamago";
  let itemDescription =
    "Soft, sweet Japanese omelet draped over seasoned sushi rice, wrapped in nori.";
  let item = (
    <div className="menu-item-details">
      <div className="blur-layer fill-parent"></div>
      <div
        className="fill-parent center-children"
        key={`menuItem${numItems++}`}
      >
        <div className="menu-item-title-box">
          <span className="menu-item-title">{itemName}</span>
        </div>
        <div className="menu-item-description-box">
          <span className="menu-item-description">{itemDescription}</span>
        </div>
      </div>
    </div>
  );
  let itemImage = (
    <div
      className="menu-item-image"
      style={{ backgroundImage: "url(sushi.png)" }}
    ></div>
  );

  return (
    <div className="menu-item-box">
      {itemImage}
      {item}
    </div>
  );
}
