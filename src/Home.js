import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMF_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_3000x1200_2X_CV4._CB411870756_.jpg"
        alt="amazon home banner"
      />

      {/* product id, title, price, rating, image */}
      {/* product */}
      <div className="home_row">
        <Product
          id="12345"
          title="Xbox Series X"
          price={699.99}
          rating={5}
          image="https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png"
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
          title="Windowsill Herb Planter Box, Set of 3, Rectangular Self Watering Indoor Garden for Kitchens, Grow Plants, Flowers or Succulents, Large Water Reservoir"
          price={28.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81ZlJhcXlVL._AC_SX679_.jpg"
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
      <div className="home_row">
        <Product
          id="890123"
          title="TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model"
          price={299.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/714hn7q7WxL._AC_SX679_.jpg"
        />
    </div>
    </div>
  );
}

export default Home;
