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

const Index = ({ data, pathname }: any) => {
  console.log("pathName%%%%%", pathname);
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
            <ALink href={`/${pathname}`} className="active">
              Product
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
  const response: any = await CategoryApi.getProductsByCategory(pathname);
  const { data } = response.data;

  // Pass data to the page via props
  return { props: { data, pathname } };
}

export default Index;
