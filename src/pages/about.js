import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
const AboutPage = () => {
  return (
    <Layout pageTitle="Aboutpage">
      <p>This is about page </p>
      <StaticImage
        src="../images/mitchell-ng-liang-an-s34iTpkwnF0-unsplash.jpg"
        alt="India"
      />
    </Layout>
  );
};

export default AboutPage;
