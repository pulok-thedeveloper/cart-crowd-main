import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckoutForm = () => {
    const [cardError, setCardError] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if(error) {
            console.log(error)
            setCardError(error.message)
        }
        else{
            setCardError('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <CardElement
        className='mb-10 mt-3'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
         <div className="form-control mt-5">
        <input
          className="signup-btn p-3 w-72"
          type="submit"
          value="Place Order"
          disabled={!stripe}
        />
      </div>
      </form>
    );
};

export default CheckoutForm;