import React, { useContext } from "react";
import "./Wishlist.css";
import { FaRegHeart } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import WishProduct from "./WishProduct/WishProduct";

const Wishlist = () => {
  const { wishlist, handleWishDelete } = useContext(AuthContext);
  return (
    <div className="min-h-screen">
      <div className="cart-title h-64 grid items-center">
        <h1 className="text-9xl font-semibold text-center">Wishlist</h1>
      </div>
      {wishlist?.length > 0 ? (
        <div className="p-16 gap-16">
          <div className="grid gap-10">
            {wishlist?.map((product) => (
              <WishProduct
                key={product?._id}
                product={product}
                handleWishDelete={handleWishDelete}
              ></WishProduct>
            ))}
          </div>
        </div>
      ) : (
        <div className="grid justify-center items-center cart-container">
          <div className="text-center flex flex-col gap-10 justify-center items-center">
            <FaRegHeart className="text-9xl" />
            <h1 className="text-4xl font-semibold">
              No products added to the wishlist
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
