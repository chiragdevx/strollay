import { createAction } from "@reduxjs/toolkit";

export const cartActions = {
  getCart: createAction("cart/getCart"),
  addToCart: createAction<{}>("cart/addToCart"),
  removeFromCart: createAction<{}>("cart/removeFromCart"),
  setCart: createAction("cart/setCart"),
  getCartError: createAction("cart/getCartError"),
  emptyCart: createAction("cart/emptyCart"),
  setFrequency: createAction("cart/setFrequency"),
  deleteItem: createAction("cart/deleteItem"),
  clearCart: createAction("cart/clearCart"),
};
