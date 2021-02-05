module.exports = {
  siteMetadata: {
    title: 'Provider',
  },
  plugins: [
    { resolve: 'gatsby-plugin-pnpm', options: {} },
    { resolve: 'gatsby-theme-games', options: { basePath: '/games' } },
    { resolve: 'gatsby-theme-sports', options: { basePath: '/sports' } },
  ],
};
