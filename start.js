require("@babel/register")({
  presets: [
    ["@babel/preset-env", {
        useBuiltIns: "usage",
        corejs: 3,
        targets: {
            firefox: "64",
        },
    }]
    ]
});

module.exports = require('./server.js');