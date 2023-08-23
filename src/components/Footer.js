import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../style/style.css";
import * as FooterStyles from "./Footer.module.css"


export default function Footer() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          sourceInstanceName: { eq: "files" }
          extension: { eq: "pdf" }
        }
      ) {
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
        <div
          className={`ui-section-footer__layout ui-layout-flex ${FooterStyles.columnwrap}`}
          // style={spaceBetweenColumnWrapStyle}
        >
          <p
            className="ui-section-footer--copyright ui-text-note"
            style={{ marginBottom: ".8rem", fontWeight: "bold" }}
          >
            Terms of Service
          </p>

          {data.allFile.edges.map((file, index) => {
            return (
              <p
                key={`pdf-${index}`}
                className="ui-section-footer--copyright ui-text-note"
              >
                <small>
                  <a href={file.node.publicURL} download style={{fontWeight: "bold"}}>
                    {file.node.name}
                  </a>
                </small>
              </p>
            );
          })}
        </div>
      </div>
      <br />
      <div className="ui-layout-container">
        <div
          className={`ui-section-footer__layout ui-layout-flex ${FooterStyles.rowwrap}`}
          // style={spaceBetweenRowWrapStyle}
        >
          {/* <!-- COPYRIGHT --> */}
          <p className="ui-section-footer--copyright ui-text-note">
            <small>
              All rights reserved &copy; Rural Holidays NZ Ltd {new Date().getFullYear()}
            </small>
          </p>

          {/* <!-- MENU --> */}
          <p className="ui-section-footer--copyright ui-text-note">
            <small>
              Proudly hosted by{" "}
              <a href="https://www.codos.co.nz/" aria-label="#">
                <StaticImage src="../images/logo_codos.png" width={70} />
              </a>
            </small>
          </p>
        </div>
      </div>
    </footer>
  );
}
