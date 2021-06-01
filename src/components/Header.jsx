import React from "react";
import { Link, useI18next } from "gatsby-plugin-react-i18next";
import {
  navLinks,
  navLinkItem,
  navLinkText,
} from "../components/Layout.module.css";
import { useTranslation } from "gatsby-plugin-react-i18next";
const Header = () => {
  const { t } = useTranslation();
  const { languages, originalPath } = useI18next();
  return (
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/">
            {t("Home")}
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link className={navLinkText} to="/about">
            {t("About")}
          </Link>
        </li>
      </ul>
      <ul className={navLinks}>
        {languages.map((lng) => (
          <li className={navLinkItem} key={lng}>
            <Link className={navLinkText} to={originalPath} language={lng}>
              {lng}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
