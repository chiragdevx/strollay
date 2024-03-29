import React from "react";

type Props = {};

const CTA = (props: Props) => {
  return (
    <div className="mt-1 pt-10 flex justify-center items-center mb-12">
      <div>
        <div className="text-center text-lg font-semibold px-4 pb-[20px]">
          NEWSLETTER
        </div>
        <div className="text-center text-xs text-[14px] pb-[20px]">
          Sign up for our newsletter and get 15% off your next order.
        </div>
        <div className="text-center flex justify-around border-[1px] border-black">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-3 py-2"
          />
          <div className="p-[2px] border-black border-l-[0.5px] px-1 py-2 bg-black">
            <svg
              height={24}
              width={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer "
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L13.7071 19.7071C13.3166 20.0976 12.6834 20.0976 12.2929 19.7071C11.9024 19.3166 11.9024 18.6834 12.2929 18.2929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L12.2929 5.70711C11.9024 5.31658 11.9024 4.68342 12.2929 4.29289Z"
                  fill="#FFFFFF"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
