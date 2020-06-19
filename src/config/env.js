/**
 * 根据开发环境不同，返回不同的环境配置
 */
const baseConf = {
    "project_code": "p20001",
    "platform": "wx-mini",
    "account_type": "user",
    "api_client_token": "p20001:wx:user",
};

const config = {
    dev: {
        title: 'vue-h5-dev',
        baseUrl: 'http://yuenov.com:15555', // 项目地址
        baseApi: '/app/open/api', // 本地api请求地址,注意：如果你使用了代理，请设置成'/'
    },
    test: {
        title: 'vue-h5-dev',
        baseUrl: 'http://test.com:15555',
        baseApi: '/app/open/api',
    },
    prod: {
        title: 'vue-h5-dev',
        baseUrl: 'http://prod.com:15555',
        baseApi: '/app/open/api',
    }
}

const env = { ...baseConf, ...config[process.env.VUE_APP_ENV] };

export default env;