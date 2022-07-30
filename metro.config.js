// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

const originalPolyfills = config.serializer.getPolyfills.bind(
  config.serializer
);

config.serializer.getPolyfills = (props) => {
  return [...originalPolyfills(props), require.resolve("./polyfillEntry")];
};

module.exports = config;
