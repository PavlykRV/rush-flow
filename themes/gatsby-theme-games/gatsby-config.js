const config = (options) => {
  console.log('GAMES CONFIG', options);
  return options
    ? {
        plugins: [
          'gatsby-plugin-pnpm',
          {
            resolve: 'gatsby-plugin-page-creator',
            options: { path: `${__dirname}/src/pages` },
          },
        ],
      }
    : {
        plugins: ['gatsby-plugin-pnpm'],
      };
};

module.exports = process.env.THEME_STANDALONE ? config() : config;
