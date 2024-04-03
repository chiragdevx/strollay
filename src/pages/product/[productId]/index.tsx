"use client";
import React, { useEffect, useState } from "react";
import Product from "../../../components/Product";
import Helmet from "react-helmet";
import ALink from "@/components/features/CustomLink";
import { useRouter } from "next/router";
import ProductNav from "@/components/product/ProductNav";
import imagesLoaded from "imagesloaded";
import MediaTwo from "@/components/product/media/MediaTwo";
import Detail from "@/components/product/detail/Detail";
import CollectionSlider from "@/components/collections/CollectionSlider";

const Index = () => {
  // const slug = useRouter().query.slug;

  // if (!slug) return "";

  // const { data, loading, error } = useQuery(GET_PRODUCT, {
  //   variables: { slug },
  // });
  const data = {};
  const [loaded, setLoadingState] = useState(false);
  // const product = data && data.product.data;
  const product: any = [];
  // const related = data && data.product.related;
  const related = [];

  // useEffect(() => {
  //   if (!loading && product)
  //     imagesLoaded("main")
  //       .on("done", function () {
  //         setLoadingState(true);
  //       })
  //       .on("progress", function () {
  //         setLoadingState(false);
  //       });
  //   if (loading) setLoadingState(false);
  // }, [loading, product]);

  // const showSidebar = () => {
  //   document.querySelector("body").classList.add("right-sidebar-active");
  // };

  // const hideSidebar = () => {
  //   document.querySelector("body").classList.remove("right-sidebar-active");
  // };
  return (
    <main className="main single-product product-layout-grid">
      <Helmet>
        <title>Riode React eCommerce Template | Product default</title>
      </Helmet>
      <h1 className="d-none">
        Riode React eCommerce Template - Product default
      </h1>
      {true ? (
        <div className={`page-content mb-10 ${true ? "" : "d-none"}`}>
          <div className="container-fluid skeleton-body">
            <div className="product-navigation">
              <ul className="breadcrumb breadcrumb-lg">
                <li>
                  <ALink href="/">
                    <i className="d-icon-home"></i>
                  </ALink>
                </li>
                <li>
                  <ALink href="#" className="active">
                    Products
                  </ALink>
                </li>
                <li>Detail</li>
              </ul>

              {/* <ProductNav product={[]} /> */}
            </div>

            <div className="row gutter-lg">
              {/* <aside className="col-lg-3 col-xxl-2 right-sidebar sidebar-fixed sticky-sidebar-wrapper">
                <div className="sidebar-overlay" onClick={hideSidebar}>
                  <ALink className="sidebar-close" href="#">
                    <i className="d-icon-times"></i>
                  </ALink>
                </div>

                <ALink
                  href="#"
                  className="sidebar-toggle"
                  onClick={showSidebar}
                >
                  <i className="fas fa-chevron-left"></i>
                </ALink> */}
              {/* <div className="sidebar-content">
                  <div className="sticky-sidebar">
                    <div className="service-list mb-4">
                      <div className="icon-box icon-box-side icon-box3">
                        <span className="icon-box-icon">
                          <i className="d-icon-secure"></i>
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">Secured Payment</h4>
                          <p>We ensure secure payment!</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side icon-box1">
                        <span className="icon-box-icon">
                          <i className="d-icon-truck"></i>
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">Free Shipping</h4>
                          <p>On all US orders above $99</p>
                        </div>
                      </div>
                      <div className="icon-box icon-box-side icon-box2">
                        <span className="icon-box-icon">
                          <i className="d-icon-money"></i>
                        </span>
                        <div className="icon-box-content">
                          <h4 className="icon-box-title">
                            Money Back guarantee
                          </h4>
                          <p>Any back within 30 days</p>
                        </div>
                      </div>
                    </div>
                    <div className="product-banner banner banner-fixed overlay-zoom overlay-dark mb-4 product-default-banner">
                      <figure>
                        <img
                          src="./images/home/product/banner.jpg"
                          width="280"
                          height="312"
                          alt="banner"
                        />
                      </figure>
                      <div className="banner-price-info font-weight-bold text-white text-uppercase ls-m">
                        20-22<sup>th</sup> April
                      </div>
                      <div className="banner-content text-center mt-1">
                        <h4 className="banner-subtitle d-inline-block bg-primary text-uppercase ls-m font-weight-semi-bold text-dark mb-0">
                          Ultimate Sale
                        </h4>
                        <h3 className="banner-title ls-l text-uppercase text-white font-weight-bold mb-0">
                          Up to 70%
                        </h3>
                        <p className="mb-4 font-primary text-white lh-1 ls-m">
                          Discount Selected Items
                        </p>
                        <ALink
                          href="/shop"
                          className="btn btn-white btn-link btn-underline"
                        >
                          Shop now<i className="d-icon-arrow-right"></i>
                        </ALink>
                      </div>
                    </div>
                  </div>
                </div> */}
              {/* </aside> */}

              <div className="col-lg-12 col-xxl-10">
                <div className="product product-single row mb-4">
                  <div className="col-lg-7">
                    <MediaTwo product={product} />
                  </div>

                  <div className="col-lg-5">
                    <Detail
                      isDesc={true}
                      data={data}
                      isSticky={true}
                      adClass="pb-0 mb-10"
                      isNav={false}
                    />
                  </div>
                </div>

                <div className="mt-15">
                  <div className="flex items-center justify-center">
                    <h3 className="font-semibold">
                      {" "}
                      You may also be Interested in
                    </h3>
                  </div>
                  <CollectionSlider />
                </div>
                <div className="mt-24">
                  <div className="flex items-center justify-center">
                    <h3 className="font-semibold">
                      {" "}
                      You may also want to Look at
                    </h3>
                  </div>
                  <CollectionSlider />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {/* {loaded && !loading ? (
          ""
        ) : (
          <div className="skeleton-body container-fluid mb-10 mt-5">
            <div className="row gutter-lg">
              <div className="col-lg-9 col-xxl-10">
                <div className="row">
                  <div className="col-md-7 sticky-sidebar-wrapper cols-sm-2">
                    <div className="skel-pro-gallery"></div>
                  </div>

                  <div className="col-md-5">
                    <div className="skel-pro-summary mt-4 mt-md-0"></div>

                    <div className="skel-pro-tabs"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-xxl-2 d-none d-lg-block">
                <div className="widget-2"></div>
              </div>
            </div>
            <section className="pt-3 mt-4">
              <h2 className="title justify-content-center">Related Products</h2>

              <OwlCarousel
                adClass="owl-carousel owl-theme owl-nav-full"
                options={mainSlider17}
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    className="product-loading-overlay"
                    key={"popup-skel-" + item}
                  ></div>
                ))}
              </OwlCarousel>
            </section>
          </div>
        )} */}
    </main>
  );
};

export default Index;
