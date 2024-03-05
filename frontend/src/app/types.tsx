export type CategoryType = { _id: string; name: string; __v: number };
export type ItemType = {
  _id: string;
  name: string;
  desc: string;
  img: string;
  prices: Array<number>;
};
export type CartItemType = {
  item: {
    _id: string;
    name: string;
    desc: string;
    img: string;
    prices: Array<number>;
  };
  quantity: number;
};
