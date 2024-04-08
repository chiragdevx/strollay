import ProductList from "@/components/PLP/ProductList";
import Route from "@/components/PLP/Route";
import Sidebar from "@/components/PLP/Sidebar";
import ViewAs from "@/components/PLP/ViewAs";
import ALink from "@/components/features/CustomLink";
import React from "react";

type Props = {};

const index = (props: Props) => {
  return (
    <div className="mx-auto">
      {/* <Route /> */}
      <div className="container flex w-full">
        <ul className=" breadcrumb breadcrumb-lg mt-5 ">
          <li>
            <ALink href="/">
              <i className="d-icon-home"></i>
            </ALink>
          </li>
          <li>
            <ALink href="/products" className="active">
              Products
            </ALink>
          </li>
        </ul>
      </div>
      <ViewAs />
    </div>
  );
};

export default index;
