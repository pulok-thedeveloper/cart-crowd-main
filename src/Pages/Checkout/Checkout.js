import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="min-h-screen">
      <div className="checkout-title h-96 grid items-center">
        <h1 className="text-9xl font-semibold text-center">Checkout</h1>
      </div>
      <div className="p-16">
        <form>
          <div className="grid grid-cols-3 gap-5">
            <div className="flex flex-col form-control gap-2">
              <label>FULL NAME</label>
              <input
                className="p-4"
                type="text"
                placeholder="Enter full name"
              />
            </div>
            <div className="flex flex-col form-control gap-2">
              <label>EMAIL ADDRESS</label>
              <input
                className="p-4"
                type="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="flex flex-col form-control gap-2">
              <label>CONTACT</label>
              <input
                className="p-4"
                type="text"
                placeholder="Enter phone number"
              />
            </div>
            <div className="flex flex-col form-control gap-2 col-span-3">
              <label>STREET ADDRESS</label>
              <input
                className="p-4"
                type="text"
                placeholder="Enter present address"
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
          <div className="form-control mt-5">
            <input className="signup-btn p-3 w-72" type="submit" value="Place Order" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
