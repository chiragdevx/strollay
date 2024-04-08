import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import Pagination from "../Pagination";
import PageTwo from "../PageTwo";
import ToolBox from "../shop/toolbox";

type Props = {};

const ProductList = (props: Props) => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page: any) => {
    setPage(page);
  };
  return (
    <div>
      <ToolBox />

      <section className="m-0 w-fit grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-start gap-y-6 gap-x-16 mb-5">
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
      <Pagination totalPage={10} />
    </div>
  );
};

export default ProductList;
