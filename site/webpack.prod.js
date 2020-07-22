const path = require("path");
const webpack = require("webpack");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: ["./src/index.js"],
  mode: "production",
  plugins: [
    new Dotenv()
  ],
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
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              }
            },
          },
        ],
      }
    ]
  },
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      components: path.resolve(__dirname, 'src/components'),
      services: path.resolve(__dirname, 'src/services'),
      img: path.resolve(__dirname, 'src/img'),
      node_modules: path.resolve(__dirname, 'node_modules'),
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "bundle.js"
  }
};