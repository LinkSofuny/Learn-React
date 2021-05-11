const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(
        proxy('api1', {
            target:'http//test:5000',
            changeOrigin: true, // 请求头转发
            pathRewrite: {'^api1': ''}
        }),
        proxy('api2', {
            target:'http//test:6000',
            changeOrigin: true,
            pathRewrite: {'^api2': ''}
        })
    )
}