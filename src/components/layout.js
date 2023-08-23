import React from "react";
import { Header, Footer } from ".";
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
