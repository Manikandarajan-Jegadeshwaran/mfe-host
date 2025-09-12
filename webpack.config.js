const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/[name].js",
    // chunkFilename: "chunks/[name].[contenthash].js",
    publicPath: "auto",
  },
  resolve: { extensions: [".js", ".jsx"] },
  devServer: {
    port: 3000,
    static: { directory: path.join(__dirname, "dist") },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { presets: ["@babel/preset-env", "@babel/preset-react"] },
        },
      },
      { test: /\.css$/i, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      remotes: { remote: "remote@http://localhost:3001/remoteEntry.js" },
      shared: {
        react: {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^19.1.1", // your React version
          eager: true, // important: do NOT set true
        },
        "react-dom": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "^19.1.1", // your React DOM version
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    // runtimeChunk: "single",
  },
};
