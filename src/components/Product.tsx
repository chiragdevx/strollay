import React, { useEffect } from "react";
import ProductApi from "../api/productApi";
import { useDispatch } from "react-redux";
import { productActions } from "@/store/actions/products";

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.attemptGetProducts({ test: "test" }));
    //  dispatch(productActions.attemptGetProducts({ test: "test" }));
  }, []);

  return <div>@@</div>;
}

export default Product;
