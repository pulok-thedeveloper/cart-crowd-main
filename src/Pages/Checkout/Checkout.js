import React from "react";
import "./Checkout.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const handleSubmit = e =>{
  e.preventDefault();
}

const Checkout = () => {
  return (
    <div className="min-h-screen">
      <div className="checkout-title h-96 grid items-center">
        <h1 className="text-9xl font-semibold text-center">Checkout</h1>
      </div>
      <div className="p-16">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col form-control gap-2">
              <label>FULL NAME</label>
              <input
                className="p-4"
                type="text"
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="flex flex-col form-control gap-2">
              <label>EMAIL ADDRESS</label>
              <input
                className="p-4"
                type="email"
                placeholder="Enter email address"
                required
              />
            </div>
            <div className="flex flex-col form-control gap-2">
              <label>CONTACT</label>
              <input
                className="p-4"
                type="text"
                placeholder="Enter phone number"
                required
              />
            </div>
            <div className="flex flex-col form-control gap-2 col-span-3">
              <label>STREET ADDRESS</label>
              <input
                className="p-4"
                type="text"
                placeholder="Enter present address"
                required
              />
            </div>
            <div className="flex flex-col form-control gap-2 col-span-3">
              <label>ORDER NOTES (OPTIONAL)</label>
              <textarea
                className="p-4 outline-none"
                placeholder="Notes about your order"
              ></textarea>
            </div>
          </div>
        </form>
          <div className="flex flex-col form-control gap-2 col-span-3">
            <label>CARD DETAILS</label>
            <Elements stripe={stripePromise}>
              <CheckoutForm/>
            </Elements>
          </div>
      </div>
    </div>
  );
};

export default Checkout;
