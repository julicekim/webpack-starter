const merge = require("webpack-merge");
const UqlifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const webpackBaseConfig = require("./webpack.common.config.js");

module.exports = merge(webpackBaseConfig, {
  optimization: {
    minimizer: [new UqlifyJsPlugin(), new OptimizeCSSAssetsPlugin()]
  }
});
