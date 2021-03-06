import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        {/* https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/CBCC/wfm/landing-hero-prime-overlap2.jpg */}
        {basket?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" underneath the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {/* list out all the checkout products */}

            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {/* && operator is saying, if true then run below code */}
      {basket.length > 0 && (
        <div className="checkout_right">
          <h1>Subtotal:</h1>
          <Subtotal />
        </div>
      )}
    </div>
  );
}
export default Checkout;
