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
          id="67890"
          title="Black Face Mask. Black Disposable Face Masks of 50 Pack Disposable Mask-Black"
          price={12.99}
          rating={5}
          image ="https://images-na.ssl-images-amazon.com/images/I/71jjM8o3dSL._AC_SX679_.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="78901"
          title="Nespresso Capsules VertuoLine, Melozio, Medium Roast Coffee, 30 Count Coffee Pods, Brews 7.8oz"
          price={33.00}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Oow9iowOL._SX679_.jpg"
        />
        <Product
          id="89012"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
          price={299.00}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61-PblYntsL._AC_SX679_.jpg"
        />
        <Product
          id="90123"
          title="Blink Mini – Compact indoor plug-in smart security camera, 1080 HD video, night vision, motion detection, two-way audio, Works with Alexa – 2 cameras"
          price={64.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61LrV6Id5gL._SX522_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
