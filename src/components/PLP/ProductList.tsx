import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import Pagination from "../Pagination";
import ToolBox from "../shop/Toolbox";
// import { Product } from "headless-toolkit";

type Props = {
  data: Array<any>;
};

const ProductList = (props: Props) => {
  const { data } = props;
  const [page, setPage] = useState(1);
  const handlePageChange = (page: any) => {
    setPage(page);
  };
  return (
    <div>
      <ToolBox />

      <section className="m-0 w-fit grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-start gap-y-6 gap-x-16 mb-5">
        {data.length > 0 ? (
          data.map((product, index) => (
            <CategoryCard key={index} product={product} />
          ))
        ) : (
          <div>No Products Available For Category !</div>
        )}
      </section>
      {/* <Pagination totalPage={10} /> */}
    </div>
  );
};

export default ProductList;
