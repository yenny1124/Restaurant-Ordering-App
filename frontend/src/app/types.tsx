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
  additionalDetails?: string;
};

export type ModalType = {
  _id: string;
  name: string;
  desc: string;
  img: string;
  prices: number[];
  open: boolean;
};

export const defaultItemType = {
  _id: "loading",
  name: "loading",
  desc: "loading",
  img: "loading",
  prices: [0],
  open: false,
};
