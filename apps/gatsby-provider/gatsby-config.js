module.exports = {
  siteMetadata: {
    title: 'Provider',
  },
  plugins: [
    { resolve: 'gatsby-plugin-pnpm', options: {} },
    { resolve: 'gatsby-theme-sports', options: { basePath: '/sports' } },
    { resolve: 'gatsby-theme-games', options: { basePath: '/games' } },
    { resolve: 'gatsby-plugin-sass', options: {} },
    { resolve: 'gatsby-plugin-postcss', options: {}}
  ],
};
