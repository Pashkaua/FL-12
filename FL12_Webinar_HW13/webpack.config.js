const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
const path = require("path");
module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: ["./js/index.js", "./style/app.scss"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new miniCss({
      filename: "./css/styles.css"
    })
  ],
  devServer: {
    contentBase: "./src/public",
    port: 7700
  }
};
