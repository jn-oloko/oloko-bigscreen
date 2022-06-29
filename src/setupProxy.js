const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/olokoservice",
    createProxyMiddleware({
       target: 'https://app.oloko.cn',
      //target: "http://localhost:16001",
      changeOrigin: true,
    })
  );
};
