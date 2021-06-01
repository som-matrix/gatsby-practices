import * as React from "react";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle={t("Homepage")}>
      <p>
        <Trans>This is home page</Trans>
      </p>
      <StaticImage
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt={t("mountains")}
      />
      <p>
        <Trans>Do not worry everything will be okay</Trans>
      </p>
    </Layout>
  );
};
export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default HomePage;
