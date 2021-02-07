exports.createPages = async ({ actions, grapqhl, reporter }, options) => {
    const basePath = options.basePath || '/';
  
    actions.createPage({
      path: basePath,
      component: require.resolve('./src/pages/index.js'),
    });
  };
  