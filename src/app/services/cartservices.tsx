import { CartItemType } from "../types";
// clears cart items and count in local storage
// false or empty parameter prompts the user to clear cart, true automatically clears the cart.
function clearCart(clear?: boolean) {
  if (
    clear !== undefined && clear
      ? !clear
      : !confirm("Do you really want to clear your cart?")
  )
    return;
  const localStorageKeys = Object.keys(localStorage);
  localStorageKeys.forEach((key) => {
    if (key.includes("cart-item")) localStorage.removeItem(key);
  });
  localStorage.setItem("cartCount", "0");
  window.dispatchEvent(new Event("storage"));
}

/*
  Purpose: Minimize fetching and correctly re-render cart page when items are incremented/decremented
  Assumption: No items will be added to the cart while the user is on the cart page, meaning no extra fetches would be needed.
  This should be used in conjuction with a useState. Pass in the state and update it with the return value. 
  Return value validation should be done in the function calling this service.
*/
function localCartRefresh(currentItems: Array<CartItemType>) {
  if (typeof localStorage === "undefined") {
    return;
  }

  let updatedCartItems: Array<CartItemType> = [];
  currentItems.forEach((item) => {
    const key = "cart-item" + item.item._id;

    const value = localStorage.getItem(key);

    if (value === null) {
      return;
    }
    const parsedValue = JSON.parse(value);
    if (parsedValue === undefined) return;
    const quantity = parseInt(parsedValue.quantity);
    updatedCartItems.push({ item: item.item, quantity: quantity });
  });
  return updatedCartItems;
}

// pass in a single item's id, and get the quantity
function getItemQuantity(id: string) {
  let stringItem = localStorage.getItem(`cart-item${id}`);
  if (stringItem === null) {
    return 0;
  }
  let objectItem = JSON.parse(stringItem);
  let quantity = objectItem.quantity;
  return quantity;
}

// pass in a single item's id, and get the quantity
function getItemAdditionalDetails(id: string) {
  let stringItem = localStorage.getItem(`cart-item${id}`);
  if (stringItem === null) {
    return "";
  }
  let objectItem: CartItemType = JSON.parse(stringItem);
  let additionalDetails = objectItem.additionalDetails;
  return additionalDetails;
}

// adds a single item to local storage, if it already exists the additionalDetails is incremented
function addToCart(id: string, additionalDetails?: string) {
  if (
    localStorage.getItem("cartCount") === null ||
    localStorage.getItem("cartCount") == "NaN"
  ) {
    localStorage.setItem("cartCount", "0");
  }
  let numItems = parseInt(localStorage.getItem("cartCount") ?? "0") + 1;
  localStorage.setItem("cartCount", numItems.toString());

  let item = localStorage.getItem(`cart-item${id}`);
  let quantity =
    item === null ? 0 : parseInt(JSON.parse(item ?? "").quantity ?? "0");
  quantity++;

  let categoryItem =
    !additionalDetails || additionalDetails == ""
      ? { _id: id, quantity }
      : { _id: id, quantity, additionalDetails: additionalDetails };
  localStorage.setItem(`cart-item${id}`, JSON.stringify(categoryItem));
  window.dispatchEvent(new Event("storage"));
}

function decrementItem(id: string) {
  let stringItem = localStorage.getItem(`cart-item${id}`);
  if (stringItem === null) return;
  let objectItem = JSON.parse(stringItem);
  let quantity = objectItem.quantity - 1;
  let additionalDetails = objectItem.additionalDetails;
  let categoryItem =
    !additionalDetails || additionalDetails == ""
      ? { _id: id, quantity }
      : { _id: id, quantity, additionalDetails: additionalDetails };

  if (quantity <= 0) {
    localStorage.removeItem(`cart-item${id}`);
  } else {
    localStorage.setItem(`cart-item${id}`, JSON.stringify(categoryItem));
  }

  let cartItems = parseInt(localStorage.getItem("cartCount") ?? "0") - 1;
  localStorage.setItem("cartCount", cartItems.toString());
  window.dispatchEvent(new Event("storage"));
}
function incrementItem(id: string) {
  let stringItem = localStorage.getItem(`cart-item${id}`);
  if (stringItem === null) return;
  let objectItem = JSON.parse(stringItem);
  let quantity = objectItem.quantity + 1;
  let additionalDetails = objectItem.additionalDetails;
  let categoryItem =
    !additionalDetails || additionalDetails == ""
      ? { _id: id, quantity }
      : { _id: id, quantity, additionalDetails: additionalDetails };

  localStorage.setItem(`cart-item${id}`, JSON.stringify(categoryItem));

  let cartItems = parseInt(localStorage.getItem("cartCount") ?? "0") + 1;
  localStorage.setItem("cartCount", cartItems.toString());
  window.dispatchEvent(new Event("storage"));
}

export {
  clearCart,
  localCartRefresh,
  addToCart,
  incrementItem,
  decrementItem,
  getItemQuantity,
  getItemAdditionalDetails,
};
