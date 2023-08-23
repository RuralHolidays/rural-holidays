import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Slider } from ".";

const Hero = () => {
  return (
    <>
      <div style={{ display: "grid" }}>
        <StaticImage
          style={{
            gridArea: "1/1",
            // height: "calc(100vh - 120px - 3rem)",
            maxHeight: "100vh",
          }}
          layout="fullWidth"
          alt="New Zealand Farm as background image"
          src={"../images/hero_background.avif"}
          formats={["auto", "avif", "webp"]}
        />
        <section
          className="ui-section-hero"
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
            paddingBottom: "20px",
          }}
        >
          <div className="ui-layout-container">
            <div className="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
              {/* <!-- COPYWRITING --> */}
              <div style={{ alignSelf: "start" }}>
                <h1>Kia Ora</h1>
                <h3>Hello and welcome to Aotearoa/New Zealand</h3>
                <p className="ui-text-hero">
                  Rural Holidays NZ Ltd is a leading and a long-established original owner operated ON LINE provider of
                  pre booked quality hosted farm and country home stays, plus other hospitality options with a network
                  of carefully selected properties throughout New Zealand.
                </p>
              </div>
              {/* <!-- IMAGE --> */}
              <Slider />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
