// Quantity component
import React from "react";

interface QuantityProps {
  max: number;
  onChangeQty: (qty: number) => void;
}

const Quantity: React.FC<QuantityProps> = ({ max, onChangeQty }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
      onChangeQty(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onChangeQty(quantity - 1);
    }
  };

  return (
    <div className="flex items-center w-1/2">
      <div className="w-full flex h-8 items-center flex-row">
        <button className="btn-qty h-full w-full" onClick={handleDecrement}>
          -
        </button>
        <input
          type="number"
          className=" w-full text-center flex items-center  h-full"
          value={quantity}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value >= 1 && value <= max) {
              setQuantity(value);
              onChangeQty(value);
            }
          }}
        />
        <button className="btn-qty h-full  w-full" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Quantity;
