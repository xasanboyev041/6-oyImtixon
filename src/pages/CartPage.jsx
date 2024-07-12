import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, dispatch } = useContext(CartContext);

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {cart.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <button onClick={() => removeFromCart(product)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
