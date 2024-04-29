import React from "react";
import ProductApi from "@/api/productApi";
import { GetServerSidePropsContext } from "next";
import ProductList from "@/components/PLP/ProductList";
import Route from "@/components/PLP/Route";
import Sidebar from "@/components/PLP/Sidebar";
import ViewAs from "@/components/PLP/ViewAs";
import ALink from "@/components/features/CustomLink";
import { useRouter } from "next/router";
import CategoryApi from "@/api/categoryApi";

const Index = ({ data }: any) => {
  return (
    <div className="mx-auto">
      <div className="container flex w-full">
        <ul className="breadcrumb breadcrumb-lg mt-5">
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
      <ViewAs data={data} />
      {/* Render your data here */}
    </div>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  // Extract the pathname from the context
  const pathname = context.req.url as string;
  console.log("pathname333", pathname);
  const response: any = await CategoryApi.getProductsByCategory(pathname);
  const { data } = response.data;

  // Pass data to the page via props
  return { props: { data } };
}

export default Index;
