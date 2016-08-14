var path = require("path");

module.exports = {
    entry: ["babel-polyfill", "./src/index.js"],
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build/assets"),
        publicPath: "/assets"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel"
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    }
};