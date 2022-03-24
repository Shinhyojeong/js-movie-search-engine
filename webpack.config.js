const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@components": path.resolve(__dirname, "src/components"),
      "@base": path.resolve(__dirname, "src/components/base"),
      "@domain": path.resolve(__dirname, "src/components/domain"),
      "@data": path.resolve(__dirname, "src/data"),
      "@style": path.resolve(__dirname, "src/style"),
      "@utils": path.resolve(__dirname, "src/utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ["babel-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./index.html"
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    open: true
  }
}
