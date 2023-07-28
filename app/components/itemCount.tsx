"use client";

import { useEffect, useState } from "react";

const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(initial);
  }, [initial]);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };
  return (
    <div className="product-amount-container">
      <button
        disabled={count <= 1}
        className="cube"
        variant="text"
        onClick={decrement}
      >
        -
      </button>
      <div className="product-amount">{count}</div>
      <button
        disabled={count >= stock}
        className="cube"
        variant="text"
        onClick={increment}
      >
        +
      </button>
      {stock && count ? (
        <button
          className="add-cart-button"
          variant="contained"
          color="primary"
          onClick={() => onAdd(count)}
        >
          Add to cart
        </button>
      ) : (
        <button
          className="add-cart-button"
          variant="contained"
          disabled={stock <= 0}
        >
          Añadir al carrito
        </button>
      )}
    </div>
  );
};

export default ItemCount;
