import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../style/style.css";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
}
