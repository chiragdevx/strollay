// ProductGrid.js
import React from "react";
import Shop from "@/components/shop";
import ShopByCategory from "@/components/shop/by-category";

export default function ProductGrid({ selectedCategory }) {
  return (
    <div className="lg:col-span-3">
      {selectedCategory !== "" ? <ShopByCategory /> : <Shop />}
    </div>
  );
}
