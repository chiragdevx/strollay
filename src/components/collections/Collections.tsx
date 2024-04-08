"use client";
import React, { useState } from "react";

type Props = {};

const Collections = (props: Props) => {
  const [isSelected, setIsSelected] = useState(0);
  const linkArray = ["BEST SELLER", "LATEST PRODUCTS", "SALE PRODUCTS"];

  const handleCollectionClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    event.preventDefault();
    setIsSelected(index);
  };

  return (
    <div className="flex justify-center mt-10">
      <div
        className="flex overflow-x-auto py-2 space-x-2"
        style={{ height: "50px" }}
      >
        {linkArray.map((collection, index) => {
          if (index === 0)
            return (
              <div
                key={index}
                className={`flex justify-center border-r-2 border-black px-8 cursor-pointer hover:text-black ${index === isSelected && "text-black"}`}
                onClick={(e) => {
                  handleCollectionClick(e, index);
                }}
              >
                {collection}
              </div>
            );
          else if (index === linkArray.length - 1)
            return (
              <div
                key={index}
                className={`px-8 cursor-pointer hover:text-black ${index === isSelected && "text-black"}`}
                onClick={(e) => {
                  handleCollectionClick(e, index);
                }}
              >
                {collection}
              </div>
            );
          else
            return (
              <div
                key={index}
                className={`px-8 border-r-2 border-black cursor-pointer hover:text-black ${index === isSelected && "text-black"}`}
                onClick={(e) => {
                  handleCollectionClick(e, index);
                }}
              >
                {collection}
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Collections;
