import React from "react";
import "../style/style.css";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Testimonial from "../components/Testimonial";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Close from "../components/Close";
// import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <>
      {/* <SEO title={"Rural Holidays"} description={"Home Page Rural Holidays"} /> */}
      <Hero />
      <Feature />
      <Testimonial />
      <Pricing />
      <Faq />
      <Close />
    </>
  );
};

export default IndexPage;