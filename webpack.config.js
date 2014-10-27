var path = require("path");
var webpack = require('webpack');
module.exports = {
  entry: "./app.js",
  output: {
    path: "dist",
    filename: "bundle.js"
  },
  resolve: {
    fallback: path.join(__dirname, "helpers")
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    )
  ],
	module: {
		loaders: [{ test: /\.handlebars$/, loader: "handlebars-loader" }]
	}
};