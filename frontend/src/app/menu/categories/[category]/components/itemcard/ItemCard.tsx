import "./itemcard.css";
import Image from "next/image";

type ItemTable = {
  _id: string;
  name: string;
  desc: string;
  img: string;
  prices: Array<number>;
};
export function ItemCard(props: ItemTable) {
  return (
    <div className="item-card">
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <p>{props.prices}</p>
      <img src={props.img} alt={props.name} width="100%" />
    </div>
  );
}
