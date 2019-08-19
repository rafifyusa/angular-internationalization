const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader", "angular2-template-loader"],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },

      // workaround for warning: System.import() is deprecated and will be removed soon. Use import() instead.
      {
        parser: {system: true},
        test: /[\/\\]@angular[\/\\].+\.js$/,
      },
    ],
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new webpack.DefinePlugin({
      // global app config object
      config: JSON.stringify({
        apiUrl: "http://localhost:4000",
      }),
    }),

    // workaround for warning: Critical dependency: the request of a dependency is an expression
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      path.resolve(__dirname, "src"),
    ),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/app/"),
    },
    extensions: [".ts", ".js"],
  },
};
