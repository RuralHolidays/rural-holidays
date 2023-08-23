import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { StaticImage } from "gatsby-plugin-image";

const bannerOneStyle = {
  background: `linear-gradient(45deg, rgba(235,227,227,1) 0%, rgba(61,60,60,1) 100%))`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "100vh",
  maxHeight: "100vh",
};
const borderStyle = {
  border: "10px solid #cdcdcd",
  borderRadius: "5%",
  //   verticalAlign: "bottom"
};
function defaultBanner() {
  return (
    <>
      <div style={borderStyle}>
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          dynamicHeight={true}
          swipeable={false}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
          interval={5000}
        >
          <StaticImage
            src="../images/slider_images/1.jpg"
            loading="lazy"
            alt="#"
            className="ui-image-half-right"
          />

          <StaticImage
            src="../images/slider_images/2.png"
            loading="lazy"
            alt="#"
            className="ui-image-half-right"
          />

          <StaticImage
            src="../images/slider_images/3.jpg"
            loading="lazy"
            alt="#"
            className="ui-image-half-right"
          />
          <StaticImage
            src="../images/slider_images/4.jpg"
            loading="lazy"
            alt="#"
            className="ui-image-half-right"
          />
          <StaticImage
            src="../images/slider_images/5.jpg"
            loading="lazy"
            alt="#"
            className="ui-image-half-right"
          />
          <StaticImage
            src="../images/slider_images/6.jpg"
            loading="lazy"
            alt="#"
            className="ui-image-half-right"
          />
          <StaticImage
            src="../images/slider_images/7.png"
            loading="lazy"
            alt="#"
            className="ui-image-half-right"
          />
        </Carousel>
      </div>
    </>
  );
}
export default function Slider() {
  return defaultBanner();
}
