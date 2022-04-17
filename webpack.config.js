const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   mode: "development",
   entry: "./src/Main.js",
   module: {
      rules: [{
         test: /\.elm$/,
         exclude: [/elm-stuff/, /node_modules/],
         use: {
            loader: "elm-webpack-loader",
         }
      }, {
         test: /\.s[ac]ss$/i,
         use: [
            "style-loader",
            "css-loader",
            "sass-loader"
         ]
      }]
   },
   output: {
      filename: "bundle.js",
      path: resolve(__dirname, "build"),
   },
   plugins: [
      new HtmlWebpackPlugin({
         publicPath: "/",
         title: "Krestia"
      })
   ],
   devServer: {
      static: {
         directory: resolve(__dirname, "build")
      },
      compress: true,
      port: 8000
   }
};