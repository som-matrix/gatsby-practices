module.exports = {
  siteMetadata: {
    title: "My Gatsby Practices",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-remark-embed-youtube",

    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
          quality: 90,
          breakpoints: [750, 1080, 1366, 1920],
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
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
          // `gatsby-remark-relative-images`,
          "gatsby-remark-responsive-iframe",
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 600,
          //   },
          // },
          {
            resolve: `gatsby-remark-embed-video`,
            options: {
              width: 800,
              height: 800,
              related: false,
              noIframeBorder: true,
              loadingStrategy: "lazy",
              containerClass: "embed-videoContainer",
              iframeId: false,
            },
          },
        ],
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
