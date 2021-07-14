// used in plugin below
const webpack = require("webpack");
// Review
const path = require("path");

module.exports = {
    entry: './assets/js/script.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    // npm i jQuery 1st
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    ],
    mode: 'development'
};