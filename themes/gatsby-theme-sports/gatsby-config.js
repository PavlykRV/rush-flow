const config = (options) => {

  return options
    ? {
        plugins: [
          'gatsby-plugin-pnpm',
          {
            resolve: 'gatsby-plugin-page-creator',
            options: { path: `${__dirname}/src/pages` },
          },
          'gatsby-plugin-sass',
          'gatsby-plugin-postcss',
        ],
      }
    : {
        plugins: ['gatsby-plugin-pnpm', 'gatsby-plugin-sass', 'gatsby-plugin-postcss'],
      };
};

module.exports = process.env.THEME_STANDALONE ? config() : config;
