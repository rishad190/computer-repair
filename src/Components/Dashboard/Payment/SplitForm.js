import React, { useMemo, useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import "./Payment.css";

const useOptions = () => {
  const fontSize = "16px";
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const SplitForm = ({ product, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [payment, setPayment] = useState({
    order_date: "",
    service: "",
    price: "",
    email: "",
    name: "",
    status: "",
    payWith: "",
  });

  const handleData = () => {
    const newPayment = { ...payment };
    newPayment.service = product.title;
    newPayment.email = user.email;
    newPayment.order_date = new Date();
    newPayment.name = user.name;
    newPayment.status = "pending";
    newPayment.payWith = "Credit Card";

    setPayment(newPayment);
  };
  console.log(payment);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", payload);
    fetch("http://localhost:5000/addpayment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payment),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          alert("Payment Done successfully");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label for="card-element">Card number</label>
          <div id="card-element" class="form-control">
            <CardNumberElement
              class="form-control"
              id="formGroupExampleInput"
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={(event) => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </div>
        </div>

        <br />
        <div class="form-group">
          <label for="card-element">Expiration date</label>
          <div id="card-element" class="form-control">
            <CardExpiryElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={(event) => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </div>
        </div>

        <br />
        <div class="form-group">
          <label for="card-element">CVC</label>
          <div id="card-element" class="form-control">
            <CardCvcElement
              options={options}
              onReady={() => {
                console.log("CardNumberElement [ready]");
              }}
              onChange={(event) => {
                console.log("CardNumberElement [change]", event);
              }}
              onBlur={() => {
                console.log("CardNumberElement [blur]");
              }}
              onFocus={() => {
                console.log("CardNumberElement [focus]");
              }}
            />
          </div>
        </div>

        <br />
        <button
          onMouseOver={handleData}
          className="btn btn-primary"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default SplitForm;
