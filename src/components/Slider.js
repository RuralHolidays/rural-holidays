import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { StaticImage } from "gatsby-plugin-image";

const borderStyle = {
  border: "10px solid #cdcdcd",
  borderRadius: "5%",
  //   verticalAlign: "bottom"
};

const Slider = () => {
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
            src="../images/slider_images/1.avif"
            decoding="sync"
            loading="eager"
            alt="slider image 1 of a farm"
            className="ui-image-half-right"
            formats={["auto", "avif", "webp"]}
            aspectRatio={6 / 4}
            placeholder="blurred"
          />
          <StaticImage
            src="../images/slider_images/2.avif"
            decoding="sync"
            loading="eager"
            alt="slider image 2 of a farm"
            className="ui-image-half-right"
            formats={["auto", "avif", "webp"]}
            aspectRatio={6 / 4}
            placeholder="blurred"
          />
          <StaticImage
            src="../images/slider_images/3.avif"
            decoding="sync"
            loading="eager"
            alt="slider image 3 of a farm"
            className="ui-image-half-right"
            formats={["auto", "avif", "webp"]}
            aspectRatio={6 / 4}
            placeholder="blurred"
          />
          <StaticImage
            src="../images/slider_images/4.avif"
            decoding="sync"
            loading="eager"
            alt="slider image 4 of a farm"
            className="ui-image-half-right"
            formats={["auto", "avif", "webp"]}
            aspectRatio={6 / 4}
            placeholder="blurred"
          />
          <StaticImage
            src="../images/slider_images/5.avif"
            decoding="sync"
            loading="eager"
            alt="slider image 5 of a farm"
            className="ui-image-half-right"
            formats={["auto", "avif", "webp"]}
            aspectRatio={6 / 4}
            placeholder="blurred"
          />
          <StaticImage
            src="../images/slider_images/6.avif"
            decoding="sync"
            loading="eager"
            alt="slider image 6 of a farm"
            className="ui-image-half-right"
            formats={["auto", "avif", "webp"]}
            aspectRatio={6 / 4}
            placeholder="blurred"
          />
          <StaticImage
            src="../images/slider_images/7.avif"
            decoding="sync"
            loading="eager"
            alt="slider image 7 of a farm"
            className="ui-image-half-right"
            formats={["auto", "avif", "webp"]}
            aspectRatio={6 / 4}
            placeholder="blurred"
          />
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
