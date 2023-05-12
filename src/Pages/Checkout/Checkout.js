import React, { useContext } from "react";
import "./Checkout.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { AuthContext } from "../../Context/AuthProvider";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);



const Checkout = () => {
  const { cart } = useContext(AuthContext);

  const shipping = 12;

  const total = cart?.reduce(
    (a, product) => a + product.price.disPrice * product.quantity,
    0
  );
  const grandTotal = total + shipping;

  return (
    <div className="min-h-screen">
      <div className="checkout-title h-96 grid items-center">
        <h1 className="text-9xl font-semibold text-center">Checkout</h1>
      </div>
      <div className="p-16">
          <div className="">
            <Elements stripe={stripePromise}>
              <CheckoutForm cart={cart} grandTotal={grandTotal}/>
            </Elements>
          </div>
      </div>
    </div>
  );
};

export default Checkout;
