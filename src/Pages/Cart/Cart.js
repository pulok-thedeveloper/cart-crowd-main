import React from "react";
import "./Cart.css";
import { FiShoppingCart } from "react-icons/fi";

const Cart = () => {
  return (
    <div className="min-h-screen grid grid-rows-3 items-center">
      <div className="cart-title row-span-1 h-full grid items-center">
        <h1 className="text-9xl font-semibold text-center">Cart</h1>
      </div>
      <div className="row-span-2">
        <div className="grid justify-items-center items-center gap-10">
          <FiShoppingCart className="text-9xl" />
          <h1 className="text-4xl font-semibold">
            No products added to the cart
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cart;
