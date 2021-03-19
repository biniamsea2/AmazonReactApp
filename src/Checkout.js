import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css";

function Checkout() {
    const[{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png" alt="ad"/>
            {/* https://images-na.ssl-images-amazon.com/images/G/01/credit/img18/CBCC/wfm/landing-hero-prime-overlap2.jpg */}
        </div>
    )
}
export default Checkout
