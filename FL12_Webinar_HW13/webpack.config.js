const HtmlWebpackPlugin = require("html-webpack-plugin");
const miniCss = require("mini-css-extract-plugin");
module.exports = {
  entry: [__dirname + "/src/js/index.js", "./src/style/app.scss"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
    publicPath: "./"
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
      template: __dirname + "/src/public/index.html",
      inject: "body"
    }),
    new miniCss({
      filename: "/css/styles.css"
    })
  ],
  devServer: {
    contentBase: "./src/public",
    port: 7700
  }
};
