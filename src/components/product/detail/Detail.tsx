import { connect, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Collapse from "react-bootstrap/collapse";

import ALink from "@/components/features/CustomLink";
import { toDecimal } from "@/utils";
import Quantity from "@/components/features/Quantity";

import dryWashSVG from "../../../../public/images/menuImages/dryWash.svg";
import fabricSVG from "../../../../public/images/menuImages/fabrics.svg";
import helpSVG from "../../../../public/images/menuImages/help_wp.svg";
import Image from "next/image";
import Desc from "../desc/Desc";
import { Product, Variant } from "headless-toolkit";
import { cartActions } from "@/store/actions/cart";

// import ProductNav from "~/components/partials/product/product-nav";
// import DescTwo from "~/components/partials/product/desc/desc-two";

// import { wishlistActions } from "~/store/wishlist";
// import { cartActions } from "~/store/cart";

function Detail(props: any) {
  let router = useRouter();
  const {
    data: product,
    isSticky = false,
    isDesc = false,
    adClass = "",
    isNav = true,
  } = props;
  const { toggleWishlist, wishlist } = props;
  const [cartActive, setCartActive] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const { title, price, listingPrice, sku, slug, variants, inventory } =
    product;
  const dispatch = useDispatch();
  // decide if the product is wishlisted

  // const wishlistHandler = (e) => {
  //   e.preventDefault();

  //   if (toggleWishlist && !isWishlisted) {
  //     let currentTarget = e.currentTarget;
  //     currentTarget.classList.add("load-more-overlay", "loading");
  //     toggleWishlist(product);

  //     setTimeout(() => {
  //       currentTarget.classList.remove("load-more-overlay", "loading");
  //     }, 1000);
  //   } else {
  //     router.push("/pages/wishlist");
  //   }
  // };

  const addToCart = (_product: Partial<Product>) => {
    let product = _product;
    console.log("product.quantity", product.quantity);
    const { variants } = product;
    const variant = variants?.find(
      (variant: Partial<Variant>) => variant === selectedVariant,
    );
    if (variant) {
      product = {
        ..._product,
        ...variant,
        id: _product.id,
        variantId: variant.id,
        title: _product.title,
        description: variant.title,
      };
    }
    dispatch(cartActions.addToCart({ ...product, quantity }));
  };

  return (
    <div
      className={`md:mb-10 product-details ${isSticky ? "sticky" : ""} ${adClass}`}
    >
      {isNav ? (
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

          {/* <ProductNav product={product} /> */}
        </div>
      ) : (
        ""
      )}

      <h1 className="product-name">{title}</h1>

      <div className="product-meta mb-3 flex justify-between">
        <span>
          {" "}
          SKU: <span className="product-sku">{sku}</span>
        </span>
        <span>In Stock</span>
        {/* CATEGORIES:{" "} */}
        {/* <span className="product-brand">
          {product.data.categories.map((item, index) => (
            <React.Fragment key={item.name + "-" + index}>
              <ALink
                href={{ pathname: "/shop", query: { category: item.slug } }}
              >
                {item.name}
              </ALink>
              {index < product.data.categories.length - 1 ? ", " : ""}
            </React.Fragment>
          ))}
        </span> */}
      </div>

      <div className="product-price">
        {price !== listingPrice &&
          (product.variants?.length === 0 ||
          (product.variants?.length > 0 && !product.variants[0]?.price) ? (
            <>
              <ins className="new-price">₹{toDecimal(price)}</ins>
              <del className="old-price">₹{toDecimal(listingPrice)}</del>
            </>
          ) : (
            <del className="new-price">
              ₹{toDecimal(price)} – ₹{toDecimal(listingPrice)}
            </del>
          ))}
      </div>

      {/* <div className="ratings-container">
        <div className="ratings-full">
          <span
            className="ratings"
            style={{ width: 20 * product?.data?.ratings + "%" }}
          ></span>
          <span className="tooltiptext tooltip-top">
            {toDecimal(product?.data?.ratings)}
          </span>
        </div>

        <ALink href="#" className="rating-reviews">
          ( {product?.data?.reviews} reviews )
        </ALink>
      </div> */}

      <div className="flex flex-col md:flex-row justify-between w-full border divide-y md:divide-y-0 md:divide-x-2 mt-6 ">
        <div className="w-full md:w-[33%] py-10 px-2 flex flex-col items-center justify-center gap-5">
          <span>
            {/* Make sure to provide appropriate alt text for accessibility */}
            <Image src={dryWashSVG} alt="Dry Wash Only" />
          </span>
          <span>Dry Wash Only</span>
        </div>
        <div className="w-full md:w-[33%] py-10 px-2 flex flex-col items-center justify-center gap-5">
          <span>
            <Image src={fabricSVG} alt="Premium Fabrics" />
          </span>
          <span> Premium Fabrics</span>
        </div>
        <div className="w-full md:w-[33%] py-10 px-2 flex flex-col items-center justify-center gap-5">
          <span>
            <Image src={helpSVG} alt="Contact Number" />
          </span>
          <span> +91 90 81 81 68 95 </span>
        </div>
      </div>

      <p className="product-short-desc">{product?.data?.short_description}</p>

      {/* <hr className="product-divider mb-3"></hr> */}

      {/* <div className="product-footer">
        <div className="social-links mr-4">
          <ALink
            href="#"
            className="social-link social-facebook fab fa-facebook-f"
          ></ALink>
          <ALink
            href="#"
            className="social-link social-twitter fab fa-twitter"
          ></ALink>
          <ALink
            href="#"
            className="social-link social-pinterest fab fa-pinterest-p"
          ></ALink>
        </div>{" "}
        <span className="divider d-lg-show"></span>{" "}
        <a
          href="#"
          className={`btn-product btn-wishlist`}
          title={isWishlisted ? "Browse wishlist" : "Add to wishlist"}
          onClick={wishlistHandler}
        >
          <i
            className={isWishlisted ? "d-icon-heart-full" : "d-icon-heart"}
          ></i>{" "}
          {isWishlisted ? "Browse wishlist" : "Add to Wishlist"}
        </a>
      </div> */}

      <div className="flex flex-col py-6 space-y-4 w-full mb-4">
        {variants && (
          <h1 className="text-3xl font-semibold text-gray-900 mb-4">
            Blouse Option
          </h1>
        )}
        {/* Add 'flex-wrap' to allow wrapping on small screens and 'lg:flex-nowrap' to prevent wrapping on larger screens */}
        <div className="flex flex-wrap gap-9 lg:flex-nowrap">
          {variants &&
            variants.map((variant: Partial<Variant>) => (
              <div key={variant.id} className="w-full lg:w-auto">
                <button
                  className={`block w-full text-left px-6 py-3 rounded-full border-r-2 border-black-300 text-gray-700 tab-button ${selectedVariant?.id === variant.id ? "border-black bg-black text-white" : ""} `}
                  onClick={() => {
                    setSelectedVariant(variant);
                    setCartActive(true);
                  }}
                >
                  {variant.title}
                </button>
              </div>
            ))}
        </div>
      </div>

      <hr className="product-divider"></hr>

      <div className="product-form product-qty pb-0">
        <label className="d-none">QTY:</label>
        <div className="product-form-group flex flex-row gap-2">
          <Quantity
            max={inventory}
            quantity={quantity}
            setQuantity={setQuantity}
            item={product}
            type="Detail"
          />
          <button
            className={`btn-product btn-cart text-normal ls-normal font-weight-semi-bold ${cartActive ? "" : "disabled"}`}
            onClick={() => {
              console.log("quantity222", quantity);
              addToCart({ ...product, quantity });
            }}
          >
            <i className="d-icon-bag"></i>Add to Cart
          </button>
        </div>
      </div>

      {true ? <Desc product={product?.data} adClass={adClass} /> : ""}
    </div>
  );
}

export default Detail;
