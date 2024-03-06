import { createAction } from "@reduxjs/toolkit";

export const productActions = {
  // below 3 will communicate with `/products' API
  getProducts: createAction("products/getProducts"),
  setProducts: createAction("products/setProducts"),
  getProductsError: createAction("products/getProductsError"),

  // below 3 will communicate with `/category` API
  getProductsByCategoryID: createAction<{}>("products/getProductsByCategoryID"),
  setProductsByCategoryID: createAction("products/setProductsByCategoryID"),
  getProductsByCategoryError: createAction(
    "products/getProductsByCategoryError"
  ),

  // below 3 will communicate with `/bundle/[bundleID]/products` API
  getProductsByBundleID: createAction<{}>("products/getProductsByBundleID"),
  setProductsByBundleID: createAction("products/setProductsByBundleID"),
  getProductsByBundleError: createAction("products/getProductsByBundleError"),

  // below 3 will communicate with `/id` API
  getProductByID: createAction<{}>("products/getProductByID"),
  setProductByID: createAction("products/setProductByID"),
  getProductByError: createAction("products/getProductsByIdError"),
  setFrequency: createAction("products/setFrequency"),
  emptyProduct: createAction("products/emptyProduct"),
};
