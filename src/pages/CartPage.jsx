import React from "react";
import { useCart } from "../contexts/CartContext";
import "../styles/CartPage.css";

const CartPage = () => {
  const { cart, dispatch } = useCart();

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <img src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
