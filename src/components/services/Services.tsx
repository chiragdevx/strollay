import Image from "next/image";
import React from "react";
import airplane from "../../../public/images/airplane.png";
import headphone from "../../../public/images/headphone.png";
import loopArrow from "../../../public/images/loopArrow.png";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="w-full flex justify-around mt-10 max-w-7xl mx-auto">
      <div className="w-[32%] h-24 flex justify-center items-center  bg-[#F8F8F8]">
        <div className="flex gap-4">
          <div className="flex items-center">
            <Image src={airplane} height={50} width={50} alt="airplane" />
          </div>
          <div>
            <div className="text-lg font-light">FREE SHIPPING WORLDWIDE</div>
            <div className="text-sm font-light text-gray-500">
              On All Orders of USD 600+
            </div>
          </div>
        </div>
      </div>
      <div className="w-[32%] h-24 flex justify-center items-center bg-[#F8F8F8]">
        <div className="flex gap-4">
          <div className="flex items-center">
            <Image src={headphone} height={50} width={50} alt="airplane" />
          </div>
          <div>
            <div className="text-lg font-light">24/7 CUSTOMER SERVICE</div>
            <div className="text-sm font-light text-gray-500">
              24/7 WhatsApp Support
            </div>
          </div>
        </div>
      </div>
      <div className="w-[32%] h-24 flex justify-center items-center bg-[#F8F8F8]">
        <div className="flex gap-4">
          <div className="flex items-center">
            <Image src={loopArrow} height={50} width={50} alt="airplane" />
          </div>
          <div>
            <div className="text-lg font-light">100% MONEY BACK</div>
            <div className="text-sm font-light text-gray-500">
              7-Day Money Back Guarantee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
