import ProductList from "@/components/PLP/ProductList";
import Route from "@/components/PLP/Route";
import Sidebar from "@/components/PLP/Sidebar";
import ViewAs from "@/components/PLP/ViewAs";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="max-w-7xl lg:max-w-[1400px] mx-auto">
      <Route />
      <div className="flex w-full">
        <ViewAs />
      </div>
    </div>
  );
};

export default index;
