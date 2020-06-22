/**
 * 根据开发环境不同，返回不同的环境配置
 */

const config = {
    dev: {
        title: 'vue-h5-dev',
        baseUrl: 'http://yuenov.com:15555', // 项目地址
        baseApi: '/app/open/api', // 本地api请求地址,注意：如果你使用了代理，请设置成'/'
        amapKey: '38e771124099cd860d9797b6fa2b06c8', // 高德地图key
    },
    test: {
        title: 'vue-h5-test',
        baseUrl: 'http://yuenov.com:15555',
        baseApi: '/app/open/api',
        amapKey: '12121',
    },
    prod: {
        title: 'vue-h5-prod',
        baseUrl: 'http://prod.com:15555',
        baseApi: '/app/open/api',
        amapKey: '12121',
    }
}

export default {
    "project_code": "p20001",
    "platform": "wx-mini",
    "account_type": "user",
    "api_client_token": "p20001:wx:user",
    ...config[process.env.VUE_APP_ENV]
};