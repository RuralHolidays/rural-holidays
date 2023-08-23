import React from "react";
import Slider from "./Slider";
export default function Hero() {
  return (
    <>
      <section className="ui-section-hero bg-image">
        <div className="ui-layout-container">
          <div className="ui-section-hero__layout ui-layout-grid ui-layout-grid-2">
            {/* <!-- COPYWRITING --> */}
            <div style={{ alignSelf: "start" }}>
              <h1>Kia Ora</h1>
              <h3>Hello and welcome to Aotearoa/New Zealand</h3>
              <p className="ui-text-hero">
                Rural Holidays NZ Ltd is a leading and a long-established original owner operated ON LINE provider of
                pre booked quality hosted farm and country home stays, plus other hospitality options with a network of
                carefully selected properties throughout New Zealand.
              </p>
            </div>
            {/* <!-- IMAGE --> */}
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
}
