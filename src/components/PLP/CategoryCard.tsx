import Image from "next/image";
import React from "react";
import greenSareeOne from "../../../public/images/greenSareeOne.jpeg";
import CartButton from "../navbar/CartButton";
import LikeLogo from "../LikeLogo";
// import { Product } from "headless-toolkit";
import { calculateDiscount, getProductImages } from "@/common/util/helper";
import { useRouter } from "next/router";

type Props = {
  className?: string;
  product: any;
};

const Card = (props: Props) => {
  const router = useRouter();
  const { product } = props;
  const { id, title, price, listingPrice, images } = product;
  const productImages = getProductImages(images);
  const { defaultImage } = productImages;

  const navigateToPDP = (e: any) => {
    e.preventDefault();
    router.push(`product/${id}`);
  };
  return (
    <div
      className={`h-[550px] w-[100%] relative group py-3 ${props.className}`}
    >
      <div className="relative w-[100%] h-[443px] ">
        <div>
          <Image
            src={defaultImage.path}
            onClick={navigateToPDP}
            className="w-[100%] h-[443px] cursor-pointer"
            width={100}
            height={443}
            alt="greenSaree"
          />
        </div>
        {/* <div className="absolute hidden bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-between items-start gap-3 group-hover:flex">
          <div className="bg-blue-300 rounded-full cursor-pointer">
            <CartButton />
          </div>
          <div className="bg-blue-300 rounded-full cursor-pointer">
            <LikeLogo />
          </div>
        </div> */}
        <div className="absolute px-2 bg-white top-5 right-0">
          {calculateDiscount(price, listingPrice)}%
        </div>
      </div>
      <div className="mt-2 w-[200px]">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          {title}
        </div>
        <div className="flex gap-3 mt-4">
          <div className="font-semibold text-lg">₹{price}</div>
          <div className="line-through decoration-2 text-lg">
            ₹{listingPrice}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
