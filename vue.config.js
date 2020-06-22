const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    publicPath: process.env.NODE_ENV === 'prod' ? './' : '/', // 署应用包时的基本 URL。 vue-router hash 模式使用
    assetsDir: 'static', // outputDir的静态资源(js、css、img、fonts)目录
    devServer: {
        port: 8080, // 端口
        open: false, // 启动后打开浏览器
        overlay: {  // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
            warnings: false,
            errors: true
        }
    },
    css: {
        loaderOptions: {
            less: {
                prependData: `
                @import "~@/theme/global.less";
              `
            },
        }
    },
    pwa: {
        iconPaths: {
            favicon32: 'favicon.ico',
            favicon16: 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon: 'favicon.ico',
            msTileImage: 'favicon.ico',
        },
    },
}