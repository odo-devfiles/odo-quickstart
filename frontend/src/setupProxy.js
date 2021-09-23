const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  console.log("SERVICE BACKEND IP ===> " + process.env.SERVICE_BACKEND_IP);
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://' + process.env.SERVICE_BACKEND_IP + ':8080',
      changeOrigin: true,
    })
  );
};
