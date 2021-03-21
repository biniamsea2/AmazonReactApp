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
          rating={4}
          image="https://compass-ssl.xbox.com/assets/f0/85/f085c120-d3d5-4424-8b70-eb25deaa326e.png?n=XBX_A-BuyBoxBGImage01-D.png"
        />
        <Product
          id="67890"
          title="Black Disposable Face Mask"
          price={12.99}
          rating={5}
          image ="data:image/jpeg;base64,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"
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
