import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import "../style/style.css";

const TermOfServicePage = () => {
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
export default TermOfServicePage;
