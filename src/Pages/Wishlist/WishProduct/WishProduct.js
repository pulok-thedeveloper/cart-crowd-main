import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../../../Context/AuthProvider";

const WishProduct = ({ product, handleWishDelete }) => {
  const {addToDb} = useContext(AuthContext);

    const handleAddToCart = (id, quantity) =>{
        const location = "cart"
        addToDb(id, quantity, location);
      }

  return (
    <div className="grid grid-cols-4 items-center justify-between">
      <div className="flex items-center gap-10 col-span-2">
        <button onClick={() => handleWishDelete(product?._id)}>
          <RxCross2 className="text-2xl" />
        </button>
        <img className="h-64" src={product?.image[0]} alt="" />
        <h3 className="text-2xl font-semibold">{product.title}</h3>
      </div>
      <p className="text-center text-2xl font-semibold text-gray-500">
        ${product.price.disPrice}
      </p>
      <div>
        <button
          onClick={() => handleAddToCart(product._id, product.quantity)}
          className="add-to-cart px-28 py-7 sm:px-40"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default WishProduct;
