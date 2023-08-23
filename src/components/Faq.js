import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";

const Faq = () => {
  return (
    <section className="ui-section-faq">
      <div className="ui-layout-container">
        <div className="ui-section-faq__layout ui-layout-grid ui-layout-grid-2">
          <div>
            <h4 className="ui-component-list--item ui-section-faq--question">Overnight Farm & Country Stays</h4>
            <p className="ui-section-faq--answer">
              Stay in a private home, with guest only facilities separate from the hosts. Ideal for independent
              travelers and small custom tour groups.
            </p>
          </div>
          <div style={{ alignSelf: "start !important" }}>
            <h4 className="ui-component-list--item ui-section-faq--question">Technical Farm Visits</h4>
            <p className="ui-section-faq--answer">
              Available at selected host properties nationwide, ideal for tour groups, with morning or afternoon tea, or
              a catered lunch option.
            </p>
          </div>
          <div>
            <h4 className="ui-component-list--item ui-section-faq--question">Day Visits</h4>
            <p className="ui-section-faq--answer">
              Offers a snap shot of life in a Kiwi home, Taylor made and designed to suit individual visitors to include
              morning or afternoon tea, or lunch and farm activities.
            </p>
          </div>
          <div>
            <h4 className="ui-component-list--item ui-section-faq--question">Home Hosted Evening Dinners</h4>
            <p className="ui-section-faq--answer">
              This program operates primarily for tour groups (both series and one-off groups) in the garden city of
              Christchurch.
            </p>
          </div>
        </div>

        <div className="ui-section-faq--note">
          <StaticImage
            src="../images/tm.avif"
            width={400}
            formats={["auto", "avif", "webp"]}
            alt="logo of Tourism Industry Member"
          />
          <br />
          Still have questions?{" "}
          <span
            onClick={() => scrollTo("#contact")}
            aria-label="#contact"
            style={{ cursor: "help !important", textDecoration: "underline" }}
          >
            Contact us
          </span>
          .<br />
        </div>
      </div>
    </section>
  );
};

export default Faq;
