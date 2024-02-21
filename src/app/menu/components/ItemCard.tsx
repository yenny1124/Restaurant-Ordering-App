import "./itemcard.css";
export function ItemCard(props: { itemName: string; itemDescription: string }) {
  return (
    <div className="item-card">
      <p>{props.itemName}</p>
      <p>{props.itemDescription}</p>
    </div>
  );
}
