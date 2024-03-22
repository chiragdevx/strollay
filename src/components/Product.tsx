import React, { useEffect } from "react";
import ProductApi from "../api/productApi";

function Product() {
  const getData = async () => {
    const data = await ProductApi.getAll();
    console.log("data :>> ", data);
  };
  useEffect(() => {
    getData();
  }, []);
  return <div></div>;
}

export default Product;
