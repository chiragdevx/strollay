import React from "react";

interface ArrowIconProps {
  direction: "right" | "left";
  className?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ direction, className }) => {
  return (
    <div
      className={`rounded-full bg-white border-[2px] border-black  p-[6px] inline-block ${className}`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 25 24"
        fill="none"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        {direction === "right" ? (
          <g id="arrow-right">
            <path
              id="Vector"
              d="M5.5 12H19.5"
              stroke="#231F20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M12.5 5L19.5 12L12.5 19"
              stroke="#231F20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ) : (
          // You can add more cases for different directions if needed
          <g id="arrow-left">
            <path
              id="Vector"
              d="M19.5 12H5.5"
              stroke="#231F20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M12.5 5L5.5 12L12.5 19"
              stroke="#231F20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}
      </svg>
    </div>
  );
};

export default ArrowIcon;
