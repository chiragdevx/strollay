import { cartActions } from "@/store/actions/cart";
import React from "react";
import { useDispatch } from "react-redux";

interface QuantityProps {
  max: number;
  item: any;
  quantity: number;
  setQuantity?: (value: number) => void;
  type: string;
}

const Quantity: React.FC<QuantityProps> = ({
  max,
  quantity,
  setQuantity,
  item,
  type,
}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    if (quantity < max) {
      const newQuantity = quantity + 1;
      if (setQuantity) {
        setQuantity(newQuantity);
      }
      if (type === "Cart") {
        dispatch(
          cartActions.addToCart({
            ...item,
            quantity: setQuantity ? newQuantity : 1,
          }),
        );
      }
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      if (setQuantity) {
        setQuantity(newQuantity);
      }
      if (type === "Cart") {
        dispatch(
          cartActions.removeFromCart({
            ...item,
            quantity: setQuantity ? newQuantity : 1,
          }),
        );
      }
    }
  };

  return (
    <div className="flex items-center w-1/2">
      <div className="w-full flex h-8 items-center flex-row">
        <button className="btn-qty w-full" onClick={handleDecrement}>
          -
        </button>
        <input
          type="number"
          className=" w-full text-center flex   h-full"
          value={quantity}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value >= 1 && value <= max) {
              if (setQuantity) {
                setQuantity(value);
              }
              if (type === "Cart") {
                dispatch(cartActions.addToCart({ ...item, quantity: value }));
              }
            }
          }}
        />
        <button className="btn-qty w-full" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
