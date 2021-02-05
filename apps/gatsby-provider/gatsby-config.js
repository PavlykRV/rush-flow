module.exports = {
  siteMetadata: {
    title: "Provider",
  },
  plugins: ["gatsby-plugin-pnpm",
  { resolve: `games`, options: { basePath: '/games'} },
  { resolve: `sports`, options: { basePath: '/sports'} },
],
};
