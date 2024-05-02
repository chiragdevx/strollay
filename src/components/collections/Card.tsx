import Image from "next/image";
import React, { useState } from "react";
import Banner9 from "../../../public/images/Banner9.jpg";
import CartButton from "../navbar/CartButton";
import LikeLogo from "../LikeLogo";
import ALink from "../features/CustomLink";
import { getProductImages } from "@/common/util/helper";

type Props = {
  className?: string;
  product: any;
};

const Card = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const { product } = props;
  const { images, defaultImage } = getProductImages(product.images);
  const displayImageSrc =
    isHovered && images.length > 1 ? images[1].path : images[0].src;

  return (
    <ALink
      className={`w-full h-auto relative group p-3  ${props.className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={`/${product.link}`}
    >
      <div className="relative h-[250px] md:h-[411px] w-[175px] md:w-[300px] ">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered && images.length > 1 ? "opacity-0" : "opacity-100"}`}
        >
          <Image
            src={images[0]?.src}
            layout="fill"
            objectFit="cover"
            alt="Product Image"
          />
        </div>
        {/* Second Image */}
        {images.length > 1 && (
          <div
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-0" : "opacity-100"}`}
          >
            <Image
              src={images[1].path}
              layout="fill"
              objectFit="cover"
              alt="Product Image"
            />
          </div>
        )}

        {/* <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex opacity-0 visibility-hidden group-hover:opacity-100 group-hover:visibility-visible transition-opacity duration-300 ease-in-out">
          <div className="bg-[#87c6e3] rounded-full cursor-pointer mr-2 p-4">
            <CartButton />
          </div>
          <div className="bg-[#87c6e3] rounded-full cursor-pointer p-4">
            <LikeLogo />
          </div>
        </div> */}
        <div className="absolute px-2 bg-white top-5 right-0">-10%</div>
      </div>
      <div className="mt-2 w-[175px] md:w-[300px] ">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          {product.title}
        </div>
        <div className="flex justify-between gap-2 mt-2 md:w-[200px]">
          <div className="font-semibold text-lg">
            {" "}
            <h5>${product.price}</h5>
          </div>
          <div className="line-through decoration-2 text-lg">
            <h5 className="font-normal">${product.listingPrice}</h5>
          </div>
        </div>
      </div>
    </ALink>
  );
};

export default Card;
