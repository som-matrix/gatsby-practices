module.exports = {
  siteMetadata: {
    title: "My Gatsby Practices",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locale`,
        path: `${__dirname}/locales`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `es`, `cs`, `de`],
        defaultLanguage: `en`,
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
            format: function (value, format, lng) {
              if (value instanceof Date) return moment(value).format(format);
              return value;
            },
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: `/:lang?/blog/:uid`,
            getLanguageFromPath: true,
            excludeLanguages: [`es`],
          },
          {
            matchPath: `/preview`,
            languages: [`en`],
          },
        ],
      },
    },
  ],
};
