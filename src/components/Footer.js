import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as FooterStyles from "./Footer.module.css";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { sourceInstanceName: { eq: "files" }, extension: { eq: "pdf" } }) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `);

  return (
    <footer role="contentinfo" className="ui-section-footer">
      <div className="ui-layout-container">
        <div className={`ui-section-footer__layout ui-layout-flex ${FooterStyles.columnwrap}`}>
          <Link
            to="/terms-of-service"
            className="ui-section-footer--copyright ui-text-note"
            style={{ marginBottom: ".8rem", fontWeight: "bold" }}
          >
            Terms of Service
          </Link>
          <ul>
            {data.allFile.edges.map((file, index) => {
              return (
                <li
                  key={`pdf-${file.node.nam}-${index}`}
                  className="ui-section-footer--copyright ui-text-note"
                  style={{ marginLeft: "1.2rem" }}
                >
                  <a href={file.node.publicURL} download>
                    <small>{file.node.name}</small>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <br />
      <div className="ui-layout-container">
        <div className={`ui-section-footer__layout ui-layout-flex ${FooterStyles.rowwrap}`}>
          {/* <!-- COPYRIGHT --> */}
          <p className="ui-section-footer--copyright ui-text-note">
            <small>All rights reserved &copy; Rural Holidays NZ Ltd {new Date().getFullYear()}</small>
          </p>

          {/* <!-- MENU --> */}
          <div className="ui-section-footer--copyright ui-text-note">
            <small>
              Proudly hosted by{" "}
              <a href="https://www.codos.co.nz/" aria-label="Link to Website Builder CODOS">
                <StaticImage
                  src="../images/logo_codos.avif"
                  width={70}
                  formats={["auto", "avif", "webp"]}
                  alt="logo of CODOS"
                />
              </a>
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
