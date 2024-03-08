import React, { useState, useEffect } from "react";

interface QuantityProps {
  onPlus?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMinus?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  qty?: number;
  className?: string;
  max?: number;
  onChangeQty?: (quantity: number) => void;
  product?: any;
}

const Quantity: React.FC<QuantityProps> = ({
  onPlus = () => {},
  onMinus = () => {},
  qty = 1,
  className,
  max = 10,
  onChangeQty,
  product,
}) => {
  const [quantity, setQuantity] = useState(qty);

  useEffect(() => {
    setQuantity(qty);
  }, [qty]);

  useEffect(() => {
    if (onChangeQty && qty !== quantity && quantity !== null) {
      onChangeQty(quantity);
    }
  }, [quantity, onChangeQty, qty]);

  const minusQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onMinus(e);
  };

  const plusQuantity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!product || quantity < max) {
      setQuantity(quantity + 1);
    }
    onPlus(e);
  };

  const changeQty = (e: React.ChangeEvent<HTMLDivElement>) => {
    const newQty = e.currentTarget.textContent?.trim();
    let parsedQty = newQty ? Math.min(Math.max(parseInt(newQty), 1), max) : 1;
    setQuantity(parsedQty);
  };

  const handleBlur = () => {
    if (!quantity) {
      setQuantity(1);
    }
  };

  return (
    <div className={`flex w-full justify-center items-center `}>
      <span>
        <div
          className={`mx-auto flex flex-row h-12 w-40 rounded-lg bg-transparent ${className}`}
        >
          <button
            className=" text-gray-600  h-full flex-1 justify-center lg:flex-1 cursor-pointer rounded-l-lg"
            aria-label="decrease quantity"
            onClick={minusQuantity}
          >
            <span className=" flex items-center justify-center ">
              <svg
                className=" text-gray-500 hover:text-gray-800 fill-gray-400 hover:fill-gray-800"
                width="15"
                height="15"
                viewBox="0 0 14 1.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14,7.75H0V6.25H14v1.5Z"
                  transform="translate(0 -6.25)"
                ></path>
              </svg>
            </span>
          </button>
          <div className="flex-1 text-center text-sm  font-semibold text-md  md:text-base cursor-default flex items-center text-gray-700 border-none">
            <div
              className="w-full items-center justify-center flex border-none h-full"
              min="1"
              type="number"
              max={props.max}
              value={quantity}
              onChange={changeQty}
              onBlur={handleBlur}
            >
              {quantity}
            </div>
          </div>
          <button
            aria-label="increase quantity"
            className=" text-gray-600  h-full flex-1  lg:flex-1 cursor-pointer rounded-r-lg"
            onClick={plusQuantity}
          >
            <span className="flex items-center justify-center ">
              <svg
                className="fill-gray-400 hover:fill-gray-800"
                width="15"
                height="15"
                viewBox="0 0 14 14"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.25 6.25V0H7.75V6.25H14V7.75H7.75V14H6.25V7.75H0V6.25H6.25Z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </span>
    </div>
  );
};

export default Quantity;
