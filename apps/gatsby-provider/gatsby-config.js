module.exports = {
  siteMetadata: {
    title: 'Provider',
  },
  plugins: [
    { resolve: 'gatsby-plugin-pnpm', options: {} },
    { resolve: 'games', options: { basePath: '/games' } },
    { resolve: 'sports', options: { basePath: '/sports' } },
  ],
};
