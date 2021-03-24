import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from './HomePageImages/1.jpg';
import image2 from './HomePageImages/2.jpg';
import image3 from './HomePageImages/3.jpg';
import image4 from './HomePageImages/4.jpg';
import image5 from './HomePageImages/5.jpg';
import image6 from './HomePageImages/6.jpg';

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMF_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_3000x1200_2X_CV4._CB411870756_.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMF_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_3000x1200_2X_CV4._CB411870756_.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
