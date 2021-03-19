import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png"
        alt="ad"
      />
      {/* https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/CBCC/wfm/landing-hero-prime-overlap2.jpg */}
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is Empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" underneath the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          {/* list out all the checkout products */}

          {basket.map((item) => (
            <CheckoutProduct
              item = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
              rating = {item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Checkout;
