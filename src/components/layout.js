import React from "react";
import { Header, Footer } from ".";
import "../style/style.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
