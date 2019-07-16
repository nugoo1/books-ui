import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import styles from "../styles/components/carousel.module.scss"

const BodyCarousel = props => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        swipeable={true}
        dynamicHeight={true}
        infiniteLoop={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={true}
        interval={5000}
      >
        {props.images.map((image, i) => (
          <div key={i} className={styles.imageWrapper}>
            <img src={image.image} alt="" />
            <p className={styles.text}>{image.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default BodyCarousel;
