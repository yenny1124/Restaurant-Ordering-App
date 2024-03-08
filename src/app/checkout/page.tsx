"use client";
import React, { useLayoutEffect, FormEvent, ChangeEvent } from "react";
import { useEffect, useState } from "react";
import { CartItemType, ItemType } from "../types";
import ItemizedBill from "../cart/ItemizedBill";
import Link from "next/link";
import "./checkout.css";
import { clearCart } from "../services/cartservices";

export default function Checkout() {
  const [cartItems, setCartItems] = useState<Array<CartItemType>>([]);
  const [formData, setFormData] = useState({
    name: "",
    billingAddress: "", // Added this field to your form data state
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    pickUpDateTime: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState(0);
  const statusMessage = [
    <p></p>,
    <p>Submission Success</p>,
    <p>Submission Failed</p>,
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const orderData = {
      customerName: formData.name,
      billingAddress: formData.billingAddress,
      cardNumber: formData.cardNumber,
      expiryDate: formData.expiryDate,
      cvv: formData.cvv,
      pickUpDateTime: formData.pickUpDateTime,
      items: cartItems.map((item) => {
        return {
          productId: item.item._id,
          quantity: item.quantity,
        };
      }),
      total: calculateTotal(), // Include the total calculated from the cart
    };

    try {
      if (calculateTotal() <= 0) {
        setSubmissionStatus(2);

        throw new Error("Not a valid cart");
      }

      const response = await fetch(
        "https://restaurant-ecommerce.onrender.com/api/save/order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit order");
      }

      const result = await response.json();
      console.log("Order submitted successfully", result);
      setSubmissionStatus(1);
      // Optionally clear the cart after successful order submission
      clearCart(true);
      // Navigate to a success page or show a success message
      //navigate(`/order/${result._id}`); // Adjust the route as needed
    } catch (error) {
      console.error("Order submission error:", error);
      setSubmissionStatus(2);

      // Optionally inform the user of the failure to submit the order
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    window.addEventListener("storage", updateCartItems);
    return () => {
      window.removeEventListener("storage", updateCartItems);
    };
  }, [cartItems]);

  function calculateTotal() {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.item.prices[0] * item.quantity;
    });
    return total;
  }
  function updateCartItems() {
    if (typeof localStorage === "undefined") {
      return;
    }

    let updatedCartItems: Array<CartItemType> = [];
    cartItems.forEach((item) => {
      const key = "cart-item" + item.item._id;

      const value = localStorage.getItem(key);

      if (value === null) {
        return;
      }
      const parsedValue = JSON.parse(value);
      if (parsedValue === undefined) return;
      const quantity = parseInt(parsedValue.quantity);
      updatedCartItems.push({ item: item.item, quantity: quantity });
      // we are checking each element
      // we want to see if it exists in localStorage
      // if it does, we set the quantity to match
    });
    setCartItems(updatedCartItems);
  }

  const getItems = async () => {
    if (typeof localStorage === "undefined") {
      return;
    }
    const keys = Object.keys(localStorage);
    let items: Array<CartItemType> = [];

    await Promise.all(
      keys.map(async (key: string) => {
        if (!key.includes("cart-item")) return;
        const stringValue = localStorage.getItem(key);
        if (stringValue === null) return;
        const objectValue = JSON.parse(stringValue);
        let response;
        if (objectValue === undefined) return;

        response = await fetch(
          `https://restaurant-ecommerce.onrender.com/api/get/product/${objectValue._id}`
        );

        if (!response.ok) {
          console.log(
            `Could not retrieve ${objectValue._id} item from database`
          );
          return;
        }

        const item = await response.json();
        items.push({ item, quantity: objectValue.quantity });
      })
    );
    setCartItems(items);
  };

  return (
    <main className="cart-main">
      <h1 style={{ textAlign: "center" }}>Checkout</h1>
      <div className="checkout-body">
        <div className="checkout-content">
          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <ItemizedBill items={cartItems} />
          </div>

          <form onSubmit={handleSubmit} className="checkout-form">
            <h2>Credit Card Details</h2>
            <div>
              <label htmlFor="name">
                Name
                <br />
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div>
              <label htmlFor="billingAddress">
                Billing Address
                <br />
              </label>
              <input
                type="address"
                name="billingAddress"
                placeholder="billing address"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div>
              <label htmlFor="cardNumber">
                Card Number
                <br />
              </label>
              <input
                type="text"
                name="cardNumber"
                placeholder="card number"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div>
              <label htmlFor="expiryDate">
                Expiry Date
                <br />
              </label>
              <input
                type="text"
                name="expiryDate"
                placeholder="MM/DD"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div>
              <label htmlFor="cvv">
                CVV
                <br />
              </label>
              <input
                type="text"
                name="cvv"
                placeholder="cvv"
                onChange={handleChange}
                required
              ></input>
            </div>

            <div>
              <label htmlFor="pickUpDateTime">
                Pick Up Time
                <br />
              </label>
              <input
                type="datetime-local"
                name="pickUpDateTime"
                placeholder="pickUpDateTime"
                onChange={handleChange}
                required
              ></input>
            </div>

            <button type="submit" className="button-md">
              Submit
            </button>
            {statusMessage[submissionStatus]}
          </form>
        </div>
      </div>
    </main>
  );
}
