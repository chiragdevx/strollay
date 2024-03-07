// ShopPage.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions, categoryActions } from "@/store/actions";

import ProductsCarousel from "@/components/layouts/products-page-carousel";
import FilterPanel from "@/components/layouts/product-filter";

export default function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(categoryActions.getCategories());
    setSelectedCategory("");
  }, []);

  return (
    <div className="bg-[#FFF]">
      <ProductsCarousel />

      <FilterPanel
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        mobileFiltersOpen={mobileFiltersOpen}
        setMobileFiltersOpen={setMobileFiltersOpen}
      />
      <main className="mx-auto max-w-7xl overflow-visible h-full px-4 sm:px-6 lg:px-8">
        {/* Header and sort options */}
        <section
          aria-labelledby="products-heading"
          className="pb-24 overflow-visible h-full pt-6"
        >
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <ProductGrid selectedCategory={selectedCategory} />
        </section>
      </main>
    </div>
  );
}
