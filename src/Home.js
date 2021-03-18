import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YmQ1NDM5ZDgt-w3000._CB412095396_.jpg"
        alt="amazon home banner"
      />

      {/* product id, title, price, rating, image */}
      {/* product */}
      <div className="home_row">
        <Product
          id="12345"
          title="Everstone TV Wall Mount Bracket Fits Most 28'-60' TVs Tilting Swivel Extension Full Motion Arm Up to 80 lbs,VESA 400mm"
          price={19.52}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71LcWGQcHbL._AC_SX679_.jpg"
        />
        <Product
          id="12345"
          title="Everstone TV Wall Mount Bracket Fits Most 28'-60' TVs Tilting Swivel Extension Full Motion Arm Up to 80 lbs,VESA 400mm"
          price={19.52}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71LcWGQcHbL._AC_SX679_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="12345"
          title="Everstone TV Wall Mount Bracket Fits Most 28'-60' TVs Tilting Swivel Extension Full Motion Arm Up to 80 lbs,VESA 400mm"
          price={19.52}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71LcWGQcHbL._AC_SX679_.jpg"
        />
        <Product
          id="12345"
          title="Everstone TV Wall Mount Bracket Fits Most 28'-60' TVs Tilting Swivel Extension Full Motion Arm Up to 80 lbs,VESA 400mm"
          price={19.52}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71LcWGQcHbL._AC_SX679_.jpg"
        />
                <Product
          id="12345"
          title="Everstone TV Wall Mount Bracket Fits Most 28'-60' TVs Tilting Swivel Extension Full Motion Arm Up to 80 lbs,VESA 400mm"
          price={19.52}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/71LcWGQcHbL._AC_SX679_.jpg"
        />
      </div>
        
        
      </div>
  );
}

export default Home;
