import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Feature = () => {
  return (
    <section className="ui-section-feature" id="about-us">
      <div className="ui-layout-container">
        <h2>About Us</h2>
        <div className="ui-section-feature__layout ui-layout-grid ui-layout-grid-4">
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage
              src="../images/overnight_farm_and_country_stays.avif"
              alt="overnight farm and country stays"
              formats={["auto", "avif", "webp"]}
              aspectRatio={1 / 1}
            />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">Overnight Farm & Country Stays</h4>
              <p>
                Stay in the farmers home, based on a dinner, bed and breakfast basis, including a guided tour of the
                farm property.
              </p>
            </div>
          </div>
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage
              src="../images/tech_farm_visits.avif"
              alt="tech farm visits"
              formats={["auto", "avif", "webp"]}
              aspectRatio={1 / 1}
            />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">Technical Farm Visit</h4>
              <p>
                When time is short, visits of one hour’s duration that can be arranged with optional catering options.
              </p>
            </div>
          </div>
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage
              src="../images/day_visits.avif"
              alt="home hosted dinners"
              formats={["auto", "avif", "webp"]}
              aspectRatio={1 / 1}
            />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">Day Visit</h4>
              <p>Enjoy meeting with a Kiwi family in their home.</p>
            </div>
          </div>
          <div className="ui-component-card ui-component-card--feature">
            <StaticImage
              src="../images/home_hosted_evening_dinners.avif"
              alt="home stay"
              formats={["auto", "avif", "webp"]}
              aspectRatio={1 / 1}
            />
            <div className="ui-component-card--feature-content">
              <h4 className="ui-component-card--feature-title">Home Hosted Evening Dinners</h4>
              <p>Experience an evening of complete hospitality in a Kiwi home, enjoy a delicious 3 course meal.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
