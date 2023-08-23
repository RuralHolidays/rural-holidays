import React, { useState } from "react";
import { Link } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import { StaticImage } from "gatsby-plugin-image";
import * as HeaderStyles from "./Header.module.css";

const Header = () => {
  const [display, setDisplay] = useState(true);
  const [shouldHideNavOnMobile] = useState("");

  const visibilityStyle = {
    visibility: display === true ? "" : "hidden",
  };

  const onClickMobile = () => {
    display === true ? setDisplay(false) : setDisplay(true);
  };

  return (
    <>
      <header role="banner" className={`ui-section-header ${HeaderStyles.header}`}>
        <div className={`ui-section-header__layout ui-layout-flex ${HeaderStyles.flex}`}>
          {/* <!-- LOGO --> */}
          <Link to="/" className={`ui-section-header--logo`} style={visibilityStyle}>
            <StaticImage
              src="../images/logo_rural_holidays.avif"
              formats={["auto", "avif", "webp"]}
              alt="Rural Holidays Logo"
              height={200}
              layout="fixed"
              placeholder="blurred"
            />
          </Link>

          {/* <!-- HAMBURGER --> */}
          <input type="checkbox" id="ui-section-header--menu-id" 
          checked={!display} onChange={onClickMobile} />
          <label htmlFor="ui-section-header--menu-id" className="ui-section-header--menu-icon"></label>

          {/* <!-- MENU --> */}
          <nav
            role="navigation"
            className={`ui-section-header--nav ui-layout-flex ${HeaderStyles.nav}`}
            // style={navStyle}
            style={{
              visibility: shouldHideNavOnMobile,
            }}
          >
            <Link
              to="/#about-us"
              className="ui-section-header--nav-link"
              onClick={() => {
                setDisplay(true);
                scrollTo("#about-us");
              }}
            >
              About Us
            </Link>
            <div style={visibilityStyle} className="nav-divider"></div>
            <Link
              to="/#our-services"
              className="ui-section-header--nav-link"
              onClick={() => {
                setDisplay(true);
                scrollTo("#our-services");
              }}
            >
              Our Services
            </Link>
            <div style={visibilityStyle} className="nav-divider"></div>
            <Link
              to="/#contact"
              className="ui-section-header--nav-link"
              onClick={() => {
                setDisplay(true);
                scrollTo("#contact");
              }}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
