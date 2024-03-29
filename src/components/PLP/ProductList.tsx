import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import Pagination from "../Pagination";
import PageTwo from "../PageTwo";

type Props = {};

const ProductList = (props: Props) => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page: any) => {
    setPage(page);
  };
  return (
    <div>
      <section className="w-fit grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-start gap-y-5 gap-x-14 mb-5">
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
      <Pagination
        currentPage={page}
        totalPages={60}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductList;
