import React, { useContext} from "react";
import "./Cart.css";
import { FiShoppingCart } from "react-icons/fi";
import { AuthContext } from "../../Context/AuthProvider";
import CartProduct from "./CartProduct/CartProduct";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, handleCartDelete } = useContext(AuthContext);
  const shipping = 12;

  const total = cart?.reduce((a, b) => a + b.price.disPrice * b.quantity, 0);

  return (
    <div className="min-h-screen">
      <div className="cart-title h-64 grid items-center">
        <h1 className="text-9xl font-semibold text-center">Cart</h1>
      </div>
      {cart ? (
        <div className="p-16 grid grid-cols-3 gap-16">
          <div className="col-span-2 grid gap-10">
            {cart?.map((product) => (
              <CartProduct
                key={product?._id}
                product={product}
                handleCartDelete={handleCartDelete}
              ></CartProduct>
            ))}
          </div>
          <div>
            <div className="p-16 cart-total text-2xl font-semibold">
              <h3 className="mb-5 ">CART TOTALS</h3>
              <hr />
              <div className="flex justify-between my-10">
                <h3 className="text-gray-700">SUBTOTAL</h3>
                <h3>${total}</h3>
              </div>
              <div className="flex justify-between my-10">
                <h3 className="text-gray-700">SHIPPING</h3>
                <h3>${shipping}</h3>
              </div>
              <hr />
              <div className="flex justify-between my-10">
                <h3>TOTAL</h3>
                <h3 className="text-3xl">${total + shipping}</h3>
              </div>
              <div className="text-center">
                <Link className="checkout-btn block w-full text-center py-5 mb-10" to="/checkout">
                  PROCEED TO CHECKOUT
                </Link>
                <Link className="text-center py-5" to="/shop">
                  CONTINUE SHOPPING
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid justify-center items-center cart-container">
          <div className="text-center flex flex-col justify-center items-center">
            <FiShoppingCart className="text-9xl mb-10" />
            <h1 className="text-4xl font-semibold">
              No products added to the cart
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
