const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  devtool: isProduction ? "none" : "inline-source-map",
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve(__dirname, "docs"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  devServer: {
    contentBase: path.resolve(__dirname, "docs"),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
