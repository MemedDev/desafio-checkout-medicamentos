const withSass = require("@zeit/next-sass");
const withImages = require("next-images");

const config = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]"
  }
};

module.exports = withSass(withImages(config));
