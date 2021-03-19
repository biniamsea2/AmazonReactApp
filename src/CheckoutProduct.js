import React from 'react'

function CheckoutProduct({id, title, image, price, rating}) {
    return (
        <div className="checkoutProduct">
            <img src = {image} alt=""/>

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutProduct_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
        </div>
    )
}

export default CheckoutProduct
