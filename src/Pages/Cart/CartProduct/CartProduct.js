import React from "react";
import { RxCross2 } from "react-icons/rx";
const CartProduct = ({ product, handleCartDelete}) => {
  const subtotal = product.quantity * product.price.disPrice;

  return (
    <div className="grid grid-cols-4 items-center justify-between">
      <div className="flex items-center gap-10 col-span-2">
        <button onClick={()=> handleCartDelete(product?._id)}><RxCross2 className="text-2xl"/></button>
        <img className="h-64" src={product?.image[0]} alt="" />
        <h3 className="text-2xl font-semibold">{product.title}</h3>
      </div>
      <p className="text-right text-2xl font-semibold text-gray-500">
        {product.quantity} X ${product.price.disPrice}
      </p>
      <p className="text-right text-3xl font-semibold">${subtotal}</p>
    </div>
  );
};

export default CartProduct;
