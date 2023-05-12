import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { AuthContext } from "../../../Context/AuthProvider";
import dateFormat from "dateformat";


const CheckoutForm = ({grandTotal, cart}) => {
  const [cardError, setCardError] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const {deleteShoppingCart} = useContext(AuthContext);

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://cart-crowd-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ grandTotal }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [grandTotal]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.fullName.value;
    const email = form.email.value;
    const contact = form.contact.value;
    const address = form.address.value;
    const note = form.note.value;

    const now = new Date()
    const date = dateFormat(now, "mmmm dS, yyyy, h:MM TT");

    const orderData = {
      date,
      customerName: name,
      email,
      contact,
      address,
      note,
      cart,
      total: grandTotal,
      paymentMethod: 'Mastercard',
      paymentStatus: 'Paid',
      deliveryStatus: "Delivered",
    }


    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } 
    else {
      setCardError("");
    };

      const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email: email
            },
          },
        },
      );

      if(confirmError){
        setCardError(confirmError.message);
        console.log(cardError);
        return;
      }
      console.log('paymentIntent', paymentIntent);
      if(paymentIntent?.id){
        saveUserData(orderData);
      }
  };

  const saveUserData = (orderData) =>{
    fetch("https://cart-crowd-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.success){
          toast.success("Payment Successful")
          deleteShoppingCart()
        }
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-col form-control gap-2">
          <label>FULL NAME</label>
          <input
            className="p-4"
            name="fullName"
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
            name="email"
            placeholder="Enter email address"
            required
          />
        </div>
        <div className="flex flex-col form-control gap-2">
          <label>CONTACT</label>
          <input
            className="p-4"
            type="text"
            name="contact"
            placeholder="Enter phone number"
            required
          />
        </div>
        <div className="flex flex-col form-control gap-2 col-span-3">
          <label>STREET ADDRESS</label>
          <input
            className="p-4"
            type="text"
            name="address"
            placeholder="Enter present address"
            required
          />
        </div>
        <div className="flex flex-col form-control gap-2 col-span-3">
          <label>ORDER NOTES (OPTIONAL)</label>
          <textarea
            className="p-4 outline-none"
            placeholder="Notes about your order"
            name="note"
          ></textarea>
        </div>
        <div className="flex flex-col form-control gap-2 col-span-3">
          <label>CARD DETAILS</label>
          <CardElement
            className="mb-10 mt-3"
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
      </div>
      <div className="form-control">
        <input
          className="signup-btn p-3 w-72"
          type="submit"
          value="Place Order"
          disabled={!stripe || !clientSecret}
        />
      </div>
      <p className="text-red-500 mt-2">{cardError}</p>
    </form>
  );
};

export default CheckoutForm;
