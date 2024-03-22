import { createAction } from "@reduxjs/toolkit";

export const productActions = {
  getProducts: createAction("products/getProducts"),
  setProducts: createAction("products/setProducts"),
};
