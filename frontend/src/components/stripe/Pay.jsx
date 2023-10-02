import StripeCheckout from "react-stripe-checkout";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

import axios from 'axios'

const KEY =
  "pk_test_51Np7jrSAMRsFHmbSFVvOqgY2lA1OeHHCDGRQRCtrbVkFf9ASNI7tS4H2CWDFVlqaU9CT8fPthN6P5O0J38bGFeul00RknwW9us";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate= useNavigate()

  const onToken = (token) => {
    console.log("token", token);
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "https://localhost:5001/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log("res", res.data);
        navigate.push('/success')
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken,navigate]);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyConent: "center",
      }}
    >{stripeToken ? (<span>Processing, Please Wait...</span>) : 
      (<StripeCheckout
        name="Lama Shop"
        image="https://avatars.githubusercontent.com/u/58684781?v=4"
        billingAddress
        shippingAddress
        description=" Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
  )
}
    </div>
  );
};

export default Pay
