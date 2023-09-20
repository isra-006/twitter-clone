import React from 'react';
import axios from "axios";
import Stripe from "react-stripe-checkout";

const Payment = () => {

  const handleToken = (totalAmount , token) =>{
    try{
      axios.post("http://localhost:5000/api/stripe/pay", {
        amount: totalAmount,
        token: token.id
      });
    } catch (error){
      console.log(error);
    }
  }

  const tokenHandler = (token)=>{
    handleToken(100, token);
  }
  return (
    <div>
      <Stripe
        stripeKey="pk_test_51NrvqzSArcRC8sUE9WwBHXSGQ8dLbpZg2OV8fsDp1B7TI9Qknc1deq14rLnaXdTyFch5gIHYDjcAsuz7HmMosD8O00db3XbUcq"
        token={tokenHandler}
      />
    </div>
  )
}

export default Payment;

