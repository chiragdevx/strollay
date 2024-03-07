"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "@/store/actions/products";
import ProductCard from "@/components/common/product-card";
import { addToCart, toggleCart } from "@/store/reducers/cart";
import { cartActions } from "@/store/actions/cart";
import { getRecordKey } from "@/common/util/helper";

export default function Shop() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.data);
  const getAllProducts = () => dispatch(productActions.getProducts());

  const products = useSelector((state) => state.products.products);

  const addToCart = (product, isSelected) => {
    if (isSelected) dispatch(toggleCart());

    dispatch(cartActions.addToCart({ ...product, quantity: 1 }));
  };

  const onMinus = (product) => {
    dispatch(cartActions.removeFromCart({ ...product, quantity: 1 }));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products?.map((product, index) => (
          <ProductCard
            selected={cart.find((b) => b.recordKey === getRecordKey(product))}
            product={product}
            onAdd={(e, isSelected) => addToCart(product, isSelected)}
            onMinus={() => onMinus(product)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
