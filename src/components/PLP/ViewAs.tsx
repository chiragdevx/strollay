import React from "react";

type Props = {};

const ViewAs = (props: Props) => {
  return (
    <div className=" flex justify-between bg-red-300">
      <div className="flex justify-between">
        <div>View as</div>
        <div className="flex">
          <div className="border-black border-[2px]">
            <svg
              height={24}
              width={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="border-black"
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
                  d="M20 9.33333V6C20 4.89543 19.1046 4 18 4H14.6667M20 9.33333H14.6667M20 9.33333V14.6667M4 9.33333V6C4 4.89543 4.89543 4 6 4H9.33333M4 9.33333H9.33333M4 9.33333V14.6667M14.6667 9.33333H9.33333M14.6667 9.33333V4M14.6667 9.33333V14.6667M9.33333 9.33333V4M9.33333 9.33333V14.6667M20 14.6667V18C20 19.1046 19.1046 20 18 20H14.6667M20 14.6667H14.6667M4 14.6667V18C4 19.1046 4.89543 20 6 20H9.33333M4 14.6667H9.33333M14.6667 14.6667H9.33333M14.6667 14.6667V20M9.33333 14.6667V20M9.33333 4H14.6667M9.33333 20H14.6667"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="border-black border-[2px] border-l-0">
            <svg
              height={24}
              width={24}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
                  d="M3 9.5H21M3 14.5H21M8 4.5V19.5M6.2 19.5H17.8C18.9201 19.5 19.4802 19.5 19.908 19.282C20.2843 19.0903 20.5903 18.7843 20.782 18.408C21 17.9802 21 17.4201 21 16.3V7.7C21 6.5799 21 6.01984 20.782 5.59202C20.5903 5.21569 20.2843 4.90973 19.908 4.71799C19.4802 4.5 18.9201 4.5 17.8 4.5H6.2C5.0799 4.5 4.51984 4.5 4.09202 4.71799C3.71569 4.90973 3.40973 5.21569 3.21799 5.59202C3 6.01984 3 6.57989 3 7.7V16.3C3 17.4201 3 17.9802 3.21799 18.408C3.40973 18.7843 3.71569 19.0903 4.09202 19.282C4.51984 19.5 5.07989 19.5 6.2 19.5Z"
                  stroke="#000000"
                  stroke-width="2"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="p-2"> Sort By</div>
        <div className="p-2">Show per page</div>
      </div>
    </div>
  );
};

export default ViewAs;
