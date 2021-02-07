const config = ({ basePath = '/' }) => ({
  plugins: ['gatsby-plugin-pnpm'],
  basePath,
});

module.exports = process.env.THEME_STANDALONE ? config() : config;
