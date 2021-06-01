import * as React from "react";
import { Trans, useTranslation, useI18next } from "gatsby-plugin-react-i18next";
import moment from "moment";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
const HomePage = () => {
  const { t } = useTranslation();
  const { language } = useI18next();
  moment.locale(language);
  const date = moment().format("LL");
  // const createdDate = moment().startOf("hour").fromNow();
  return (
    <Layout pageTitle={t("Homepage")}>
      <p>
        <Trans>This is home page</Trans>
      </p>
      <p>{t("Published on", { date })}</p>
      <StaticImage
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt={t("mountains")}
      />
      <p>
        <Trans>Do not worry everything will be okay</Trans>
      </p>
      {/* <p>{t("Created", { createdDate })}</p> */}
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
