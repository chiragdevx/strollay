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
    <div className="quantity">
      <button className="btn-qty" onClick={handleDecrement}>
        -
      </button>
      <input
        type="number"
        className="input-qty"
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value) && value >= 1 && value <= max) {
            setQuantity(value);
            onChangeQty(value);
          }
        }}
      />
      <button className="btn-qty" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default Quantity;
