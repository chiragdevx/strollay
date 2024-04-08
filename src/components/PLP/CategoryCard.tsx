import Image from "next/image";
import React from "react";
import greenSareeOne from "../../../public/images/greenSareeOne.jpeg";
import CartButton from "../navbar/CartButton";
import LikeLogo from "../LikeLogo";

type Props = {
  className?: string;
};

const Card = (props: Props) => {
  return (
    <div
      className={`h-[550px] w-[100%] relative group py-3 ${props.className}`}
    >
      <div className="relative w-[100%] h-[443px] ">
        <div>
          <Image
            src={greenSareeOne}
            className="w-[100%] h-[443px]"
            alt="greenSaree"
          />
        </div>
        <div className="absolute hidden bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-between items-start gap-3 group-hover:flex">
          <div className="bg-blue-300 rounded-full cursor-pointer">
            <CartButton />
          </div>
          <div className="bg-blue-300 rounded-full cursor-pointer">
            <LikeLogo />
          </div>
        </div>
        <div className="absolute px-2 bg-white top-5 right-0">-10%</div>
      </div>
      <div className="mt-2 w-[200px]">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">
          Sea Blue Georgette Sequins-Work Gharara-Bottom Readymade Salwar Kameez
        </div>
        <div className="flex gap-3 mt-4">
          <div className="font-semibold text-lg">₹1,701.00</div>
          <div className="line-through decoration-2 text-lg">₹1,801.00</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
