import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleButtonCart(e) {
    setInCart(!inCart);
  }

  const cartStatus = inCart ? "in-cart" : "";
  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleButtonCart} className="add">
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
