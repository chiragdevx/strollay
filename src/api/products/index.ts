import { get } from "@/common/lib/axios-pim-instance";

export const getAllProducts = async () => {
  const path = "/products?searchFields=status:ACTIVE";
  try {
    const response = await get(path);
    const { data } = response;
    const { data: finalProductData = [] } = data;
    return finalProductData;
  } catch (e) {
    console.log("Error in getAllProducts API call", e);
    return [];
  }
};

export const getProductById = async (productID: string = "") => {
  let path = "/product";
  try {
    if (productID === "") throw new Error("CategoryID not provided");
    path = `${path}/${productID}`;
    const response = await get(path);

    const { data: finalProductData } = response;

    return finalProductData;
  } catch (e) {
    console.log("Error in productID API call", e);
  }
};
export const getProductsByCategoryID = async (categoryID: string = "") => {
  let path = "/category";
  try {
    if (categoryID === "") throw new Error("CategoryID not provided");
    path = `${path}/${categoryID}/products`;
    const response = await get(path);
    const { data } = response;
    const { data: finalProductData = [] } = data;
    return finalProductData;
  } catch (e) {
    console.log("Error in getProductsByCategoryID API call", e);
    return [];
  }
};

export const getProductsByBundleID = async (bundleID: string = "") => {
  let path = "/bundles";
  try {
    if (bundleID === "") throw new Error("BundleID not provided");
    path = `${path}/${bundleID}/products`;
    const response = await get(path);
    const { data } = response;
    const { data: productsByBundle = [] } = data;
    return productsByBundle;
  } catch (e) {
    console.log("Error in getProductsByBundleID API call", e);
    return [];
  }
};
