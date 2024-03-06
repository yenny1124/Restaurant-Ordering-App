export type CategoryType = { _id: string; name: string; __v: number };
export type ItemType = {
  _id: string;
  name: string;
  desc: string;
  img: string;
  prices: Array<number>;
  additionalDetails?: string;
};
export type CartItemType = {
  item: ItemType;
  quantity: number;
};
