import React, { useState } from "react";
import logo_rural_holidays from "../images/logo_rural_holidays.png";
import "../style/style.css";
import { Link } from "gatsby";
import * as HeaderStyles from "./Header.module.css"

export default function Header() {
  const [display, setDisplay] = useState(true);

  const visibilityStyle = {
    visibility: display === true ? "" : "hidden",
  };

  const navStyle = {
    backgroundColor: "rgb(66, 182, 37) !important",
    width: "100%",
    height: display === true ? "3rem !important" : "",
  };

  const onClickMobile = () => {
    display === true ? setDisplay(false) : setDisplay(true);
  };
  
  return (
    <>
      <header role="banner" className={`ui-section-header ${HeaderStyles.header}`}>
        <div>
          {/* className="ui-layout-container" */}
          <div
            className={`ui-section-header__layout ui-layout-flex ${HeaderStyles.flex}`}
          >
            {/* <!-- LOGO --> */}

            <Link
              to="/"
              className={`ui-section-header--logo`}
              style={visibilityStyle}
            >
              <img src={logo_rural_holidays} alt="Rural Holiday Logo"></img>
            </Link>

            {/* <!-- HAMBURGER --> */}
            <input
              type="checkbox"
              id="ui-section-header--menu-id"
              onClick={onClickMobile}
            />
            <label
              for="ui-section-header--menu-id"
              className="ui-section-header--menu-icon"
            ></label>
            {/* <!-- MENU --> */}
            <nav
              role="navigation"
              className={`ui-section-header--nav ui-layout-flex ${HeaderStyles.nav}`}
              // style={navStyle}
            >
              <Link
                to="/#about-us"
                className="ui-section-header--nav-link"
              >
                About Us
              </Link>
              <div style={visibilityStyle} class="nav-divider"></div>
              <Link
                to="/#our-survices"
                className="ui-section-header--nav-link"
              >
                Our Services
              </Link>
              <div style={visibilityStyle} class="nav-divider"></div>
              <Link
                to="/#contact"
                className="ui-section-header--nav-link"
              >
                contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
