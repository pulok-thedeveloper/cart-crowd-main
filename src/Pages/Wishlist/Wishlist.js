import React from "react";
import "./Wishlist.css";
import { FaRegHeart } from "react-icons/fa";

const Wishlist = () => {
  return (
    <div className="min-h-screen grid grid-rows-3 items-center">
      <div className="cart-title row-span-1 h-full grid items-center">
        <h1 className="text-9xl font-semibold text-center">Wishlist</h1>
      </div>
      <div className="row-span-2">
        <div className="grid justify-items-center items-center gap-10">
          <FaRegHeart className="text-9xl" />
          <h1 className="text-4xl font-semibold">
            No products added to the wishlist
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
