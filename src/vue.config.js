module.exports = {
    devServer: {
        proxy: {
            "/api": {
                target: "https://api.exchangerate.host/",
                changeOrigin: true,
                pathRewrite: {'^/api' : ''}
            },
        }
    }
};