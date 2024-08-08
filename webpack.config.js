const path = require("path");
const htmlWebpack = require("html-webpack-plugin");

module.exports = {
  entry: "/src/app.js",
  output: {
    path: path.join(__dirname + "/dist/public"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [
    new htmlWebpack({
      template: "src/index.html",
    }),
  ],
};
