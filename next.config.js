/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  target: "server",
  watchOptions: {
    poll: 1000,
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src/");
    return config;
  },
};
