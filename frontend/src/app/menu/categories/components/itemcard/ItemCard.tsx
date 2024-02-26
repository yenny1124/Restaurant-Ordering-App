import "./itemcard.css";
export function ItemCard(props: { name: string; desc: string }) {
  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
    </div>
  );
}
