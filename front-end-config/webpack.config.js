const path = require("path");

module.exports = {
  watch: true,
  mode: "production", //
  entry: {
    main: path.resolve(__dirname, "app.js"),
  },
  output: {
    path: path.resolve(__dirname, "../public/js"),
    filename: "[name].js",
    clean: true,
  },
  devtool: "inline-source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};
