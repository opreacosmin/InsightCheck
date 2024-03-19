module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "react-native-maps": "react-native-web-maps",
          },
        },
      ],
      ["module:react-native-dotenv", {
        "envName": "APP_ENV",
        "moduleName": "@env",
        "path": "env.js",
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }],
    ],
  };
};
