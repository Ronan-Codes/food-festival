const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const webpack = require("webpack")
const path = require("path");

module.exports = {
  // entry: "./assets/js/script.js",
  entry: {
    app: "./assets/js/script.js",
    events: "./assets/js/events.js",
    schedule: "./assets/js/schedule.js",
    tickets: "./assets/js/tickets.js"
  },
  output: {
    // path: path.join(__dirname + "/dist"),
    // filename: "main.bundle.js"
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        // Review
        test: /\.jpg$/i,
        use: [
          {
            // file-loader application
            loader: 'file-loader',
            options: {
              esModule: false,
              // returns name of file with file ext.
              name (file){
                return "[path][name].[ext]"
              },
              // changes our assignment URL by replacing ../ from require() statement with /assets/
              publicPath: function(url){
                return url.replace("../", "/assets/")
              }
            }
          },
          {
            // file-loader processes image first then iwl optimizes emitted files
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // the report outputs to an HTML file in the dist folder
    })
  ],
  mode: "development"
};