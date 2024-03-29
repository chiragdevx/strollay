import React from "react";
import CategoryCard from "./CategoryCard";

type Props = {};

const ProductList = (props: Props) => {
  return (
    <div>
      <section className="w-fit grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-start gap-y-5 gap-x-11 mb-5">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </section>
    </div>
  );
};

export default ProductList;
