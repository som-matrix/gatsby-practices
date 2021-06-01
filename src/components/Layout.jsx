import * as React from "react";
import { container, heading } from "../components/Layout.module.css";

import Header from "./Header";
const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <Header />
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  );
};

export default Layout;
