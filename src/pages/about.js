import * as React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import { StaticImage } from "gatsby-plugin-image";
import moment from "moment";
const AboutPage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  moment.locale(language);
  const date = moment().format("LL");
  return (
    <Layout pageTitle={t("Aboutpage")}>
      <p>
        <Trans>This is about page</Trans>
      </p>
      <p>{t("Published on", { date })}</p>
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
