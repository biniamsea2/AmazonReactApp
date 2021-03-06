import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "./HomePageImages/1.jpg";
import image2 from "./HomePageImages/2.jpg";
import image3 from "./HomePageImages/3.jpg";
import image4 from "./HomePageImages/4.jpg";
import image5 from "./HomePageImages/5.jpg";
import image6 from "./HomePageImages/6.jpg";
import image7 from "./HomePageImages/7.jpg";
import image8 from "./HomePageImages/8.jpg";
import image9 from "./HomePageImages/9.jpg";

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image4} alt="Fourth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image5} alt="Fifth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image6} alt="Sixth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image7} alt="Seventh slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image8} alt="eighth slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image9} alt="ninth slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
