import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitForm from "./SplitForm";

const stripePromise = loadStripe(
  "pk_test_51Ih2UkKWevWMHA3y3sp16XCAd1jsxOWpWZHYw96wBL9GhHoL8XBTkQnnk1XfeqCG3E0XQOj5kTlZ6ImcYyb6xviW002LnANpIO"
);

const Payment = ({ product, user }) => {
  return (
    <Elements stripe={stripePromise}>
      <h5 className="mt-5">Pay With</h5>
      <SplitForm product={product} user={user}></SplitForm>
    </Elements>
  );
};

export default Payment;
