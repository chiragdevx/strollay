import Link from "next/link";
import { useSelector } from "react-redux";

import React, { useMemo } from "react";
import { getProductImages } from "@/common/util/helper";

import Image from "next/image";
import { safelyReadString } from "@/common/util/commonHelper";
import Button from "../elements/button";
import Quantity from "../elements/quantity";

const ProductCard = ({
  product,
  onAdd = () => {},
  onMinus = () => {},
  selected,
}) => {
  const { id, title, images } = product;
  const formattedImages = getProductImages(images).images;

  return (
    <Link key={product.id} href={`/product?id=${product.id}`}>
      <div
        key={id}
        className="group w-[300px] md:w-full max-w-[300px] h-fit  rounded-[20px] border border-stone-800 overflow-hidden h-min-[490px]"
      >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden max-h-[260px] bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={
              formattedImages && formattedImages.length
                ? formattedImages[0]?.path
                : "/images/sourceImage.png"
            }
            width={133}
            height={260}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center lg:h-full  lg:w-full"
          />
        </div>
        <div className="p-5 flex-col h-fit flex justify-center">
          <div className="flex flex-col items-center space-y-2 relative">
            <div className="font-bold text-[#231f20] text-[15px] tracking-wide leading-normal font-roboto-slab">
              <a href={product?.url} className="capitalize">
                {safelyReadString(title).toLowerCase()}
              </a>
            </div>
          </div>
          <div className="w-full mt-4 ">
            {selected ? (
              <span>
                <Quantity
                  onPlus={onAdd}
                  onMinus={onMinus}
                  qty={selected.quantity}
                />
              </span>
            ) : (
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  onAdd(e, true);
                }}
                className="w-full text-center"
              >
                Add
              </Button>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
