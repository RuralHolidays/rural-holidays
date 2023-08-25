import React from "react";
import { useStaticQuery, graphql, Script, ScriptStrategy } from "gatsby";
import "../style/style.css";
import { SEO } from "../components";

const TermsOfServicePage = () => {
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
    <>
      <section className="ui-section-feature" id="legal-documents">
        <div className="ui-layout-container">
          <h2>Terms of Service</h2>
          <ul style={{ paddingBottom: "10rem" }}>
            {data.allFile.edges.map((file, index) => {
              return (
                <li key={`pdf-${index}`}>
                  <a href={file.node.publicURL} download>
                    {file.node.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default TermsOfServicePage;

export const Head = () => (
  <>
    <SEO title="Terms of Service | Rural Holidays">
      <Script
        id="cloudflare-web-analytics-tos"
        src={`https://ruralholidays.co.nz/mur/scitylanabew/nocaeb.js?token=${process.env.GATSBY_WEB_ANALYTICS_TOKEN}`}
      />
    </SEO>
  </>
);
