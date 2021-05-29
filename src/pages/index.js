import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
const HomePage = ({ data }) => {
  return (
    <Layout pageTitle="Homepage">
      <p>This is home page</p>
      <StaticImage
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt="mountains"
      />
      <p>{data.site.siteMetadata.title} </p>
    </Layout>
  );
};
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
export default HomePage;
