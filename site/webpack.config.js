const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["react-hot-loader/patch", "./src/index.js"],
  mode: "development",
  watch: true,
  watchOptions: {
    poll: 1000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      components: path.resolve(__dirname, 'src/components'),
      node_modules: path.resolve(__dirname, 'node_modules'),
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3030,
    historyApiFallback: true,
    publicPath: "http://localhost:3030/dist",
    hotOnly: true,
  }
};