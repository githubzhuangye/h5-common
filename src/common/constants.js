import ENV from '@/config/env';

const C_API = {
    BASE_URL: `${ENV.baseUrl}${ENV.baseApi}`,
    HTTP_TIMEOUT: 15000,
    WITH_CREDENTIALS: false,
};

const C_RESP = {
    ERR_HTTP_BAD_REQUEST: 400,
    ERR_HTTP_SESSION_TIMEOUT: 401,
    ERR_HTTP_FORBIDDEN: 403,
    ERR_HTTP_NOT_FOUND: 404,
    ERR_HTTP_NOT_ALLOWED: 405,
    ERR_HTTP_SERVER_ERROR: 500,
    ERR_HTTP_BAD_GATEWAY: 502,
    ERR_UNKNOWN: -9999,
    OK: 0,
};

const AMAP = {
    KEY: ENV.amapKey,
    API_URL: 'https://webapi.amap.com/maps?v=1.4.15',
}

export default {
    ...C_API,
    ...C_RESP,
    AMAP,
};
