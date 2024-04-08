import Image from "next/image";
import React from "react";
import airplane from "../../../public/images/airplane.png";
import headphone from "../../../public/images/headphone.png";
import loopArrow from "../../../public/images/loopArrow.png";

type Props = {};

const Services = (props: Props) => {
  return (
    <div className="flex md:flex-row flex-col px-4 justify-around  mt-10 max-w-7xl mx-auto gap-y-4">
      <div className="w-full md:w-[32%] bg-[#F8F8F8] p-4 flex justify-center items-center text-center mx-auto">
        <div className="flex gap-4 items-center">
          <Image src={airplane} height={50} width={50} alt="airplane" />
          <div>
            <div className="text-lg font-light">FREE SHIPPING WORLDWIDE</div>
            <div className="text-sm font-light text-gray-500">
              On All Orders of USD 600+
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[32%] bg-[#F8F8F8] p-4 flex justify-center items-center text-center mx-auto">
        <div className="flex gap-4 items-center">
          <Image src={headphone} height={50} width={50} alt="headphone" />
          <div>
            <div className="text-lg font-light">24/7 CUSTOMER SERVICE</div>
            <div className="text-sm font-light text-gray-500">
              24/7 WhatsApp Support
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[32%] bg-[#F8F8F8] p-4 flex justify-center items-center text-center mx-auto">
        <div className="flex gap-4 items-center">
          <Image src={loopArrow} height={50} width={50} alt="loop arrow" />
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
