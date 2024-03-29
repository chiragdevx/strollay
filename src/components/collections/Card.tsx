import Image from "next/image";
import React from "react";
import Banner9 from "../../../public/images/Banner9.jpg";
import CartButton from "../navbar/CartButton";
import LikeLogo from "../LikeLogo";

type Props = {
  className?: string;
};

const Card = (props: Props) => {
  return (
    <div
      className={`h-[400px] min-w-[225px] relative group p-3 ${props.className}`}
    >
      <div className="relative h-[314px] w-[200px]">
        <div>
          <Image src={Banner9} height={400} width={200} alt="banner" />
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
        <div className="flex justify-between gap-2 mt-2">
          <div className="font-semibold text-lg">₹1,701.00</div>
          <div className="line-through decoration-2 font-semibold text-lg">
            ₹1,801.00
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
