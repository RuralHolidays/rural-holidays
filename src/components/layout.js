import React from "react";
import { Script, ScriptStrategy } from "gatsby";
import { Header, Footer } from ".";
import "../style/style.css";

const Layout = ({ children }) => {
  return (
    <>
      <Script
        id="cloudflare-web-analytics"
        src={`https://static.cloudflareinsights.com/beacon.min.js?token=${process.env.GATSBY_WEB_ANALYTICS_TOKEN}&spa=false`}
        strategy={ScriptStrategy.offMainThread}
      />
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
