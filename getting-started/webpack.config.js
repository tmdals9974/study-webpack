//package.json - script - "build" : "webpack --mode=none --entry=src/index.js --output=public/output.js" 로 대체 가능.

// module.exports = {
//     mode : 'none',
//     entry : 'src/index.js',
//     output : 'public/output.js'
// }

//-------------------------------------------------------

// webpack.config.js
// `webpack` command will pick up this config setup by default
var path = require("path");

module.exports = {
    mode: "none",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
};
