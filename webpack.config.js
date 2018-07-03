const path = require("path");
const GhPagesWebpackPlugin = require("gh-pages-webpack-plugin");

module.exports = {
  entry: "./index.jsx",
  output: { path: path.resolve(__dirname, "public"), filename: "bundle.js" },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["react", "stage-2"]
        }
      },
      {
        test: /.css?$/,
        loader: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new GhPagesWebpackPlugin({
      path: "./public"
    })
  ]
};
