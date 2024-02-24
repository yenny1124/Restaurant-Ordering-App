import "./itemcard.css";
export function ItemCard(props: { itemName: string; itemDescription: string }) {
  return (
    <div className="item-card">
      <h2>{props.itemName}</h2>
      <p>{props.itemDescription}</p>
    </div>
  );
}
