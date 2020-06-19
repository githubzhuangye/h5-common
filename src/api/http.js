import axios from 'axios';
import store from '@/store';
import { Toast } from 'vant';
// 根据环境不同引入不同api地址
import C from '@/common/constants'

// create an axios instance
const instance = axios.create({
    baseURL: C.BASE_URL, // url = base api url + request url
    withCredentials: C.WITH_CREDENTIALS, // send cookies when cross-domain requests
    timeout: C.HTTP_TIMEOUT, // request timeout
});

// 请求配置
const reqConfig = (config) => {
    // 不传递默认开启loading
    if (!config.hideloading) {
        Toast.loading({
            forbidClick: true
        })
    }
    const token = store.state.token;
    token && (config.headers['X-Token'] = token);
    return config;
};

// 请求错误
const reqError = (error) => {
    return Promise.error(error);
};

// request拦截器
instance.interceptors.request.use(reqConfig, reqError);

// 响应拦截器
const response = (response) => {
    // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
    if (response.status === 200) {
        return Promise.resolve(response.data);
    }
    return Promise.resolve({
        status: response.status,
        msg: response.statusText,
    });
};

/* 服务器状态码不是2开头的的情况
   这里可以跟后台开发人员协商好统一的错误状态码
   然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
   下面列举几个常见的操作，其他需求可自行扩展
 */
const respError = (error) => {
    const errMsg = {
        status: C.ERR_UNKNOWN,
        msg: error.message,
        notice: "未知错误",
    };
    let notice = '未知错误';
    if (error.response && error.response.status) {
        let tempErr = {
            status: error.response.status,
            msg: error.response.statusText,
        };
        switch (error.response.status) {
            // 401: 未登录
            // 未登录则跳转登录页面，并携带当前页面的路径
            case C.ERR_HTTP_SESSION_TIMEOUT:
                this.$router.replace({
                    path: "/login",
                    query: {
                        redirect: this.$router.currentRoute.fullPath,
                    },
                });
                notice = '登录超时';
                Object.assign(tempErr, { notice });
                break;
            // 404请求不存在
            case C.ERR_HTTP_NOT_FOUND:
                notice = '资源请求不存在';
                break;
            // 500请求不存在
            case C.ERR_HTTP_SERVER_ERROR:
                notice = '服务异常';
                break;
            // 其他错误，直接抛出错误提示
            default:
                notice = '未知错误';
        }
        Object.assign(errMsg, tempErr, { notice });
    }
    Toast.fail(notice);
    return Promise.resolve(errMsg);
};

// respone拦截器
instance.interceptors.response.use(response, respError);


/**
 * http请求工具类
 */
class Http {
    constructor() { }

    /**
     * 
     * @param {*} config 
     */
    require(config = {}) {
        return instance.request(config);
    }

    /**
     * get方法，对应get请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    get(url, params) {
        return instance.get(url, { params });
    };

    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    post(url, params) {
        return instance.post(url, params);
    };

    /**
     * put方法，对应put请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    put(url, params) {
        return instance.put(url, params);
    };

    /**
     * patch方法，对应patch请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    patch(url, params) {
        return instance.patch(url, params);
    };

    /**
     * delete方法，对应delete请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    delete(url, params) {
        return instance.delete(url, params);
    };
}

const http = new Http();

export default http;
