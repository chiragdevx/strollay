import React, { useEffect } from "react";
import ProductApi from "../api/productApi";
import { useDispatch } from "react-redux";
import { productActions } from "@/store/actions/products";

function Product() {
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(productActions.getProducts());
    // dispatch(productActions.setProducts("test"));
  };

  useEffect(() => {
    console.log("getData() :>> ", getData());
  }, []);

  return <div>@@</div>;
}

export default Product;
