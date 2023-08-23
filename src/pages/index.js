import React from "react";
import { Hero, Feature, Testimonial, Pricing, Faq, Close, SEO } from "../components";

const IndexPage = () => {
  return (
    <>
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

export const Head = () => <SEO />;
