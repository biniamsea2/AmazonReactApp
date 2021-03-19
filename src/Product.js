import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {/* create an array the length of the rating, fill it with empty values and loop through the length and add a star for each number */}
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span>⭐</span>
            ))}
        </div>
      </div>

      <img
        src={image}
        alt="product img"
      />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
