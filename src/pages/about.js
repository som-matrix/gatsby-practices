import * as React from "react";
import Layout from "../components/Layout";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <Layout pageTitle={t("Aboutpage")}>
      <p>
        <Trans>This is about page</Trans>
      </p>
      <StaticImage
        src="../images/mitchell-ng-liang-an-s34iTpkwnF0-unsplash.jpg"
        alt={t("India")}
      />
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
export default AboutPage;
