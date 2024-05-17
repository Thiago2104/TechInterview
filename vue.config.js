const { InjectManifest } = require("workbox-webpack-plugin");

const config = {};

if (process.env.NODE_ENV === "production") {
  config["configureWebpack"] = {
    plugins: [
      new InjectManifest({
        swSrc: "./service-worker.js",
      }),
    ],
  };
}

module.exports = {
  ...config,
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "Tech Interview",
    themeColor: "#8a07fa",
    backgroundColor: "#b176ff",
  },
};
