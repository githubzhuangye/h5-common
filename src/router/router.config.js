/**
 * 基础路由
 * @type { *[] }
 */
const routes = [
    {
        path: '/',
        redirect: '/home',
        meta: { title: '首页', keepAlive: false },
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/page/home/index'),
        meta: { title: '首页', keepAlive: false }
    },
    {
        path: '/apply',
        name: 'Apply',
        component: () => import('@/page/apply/index'),
        meta: { title: '填写申请', keepAlive: false }
    },
    {
        path: '/map',
        name: 'Amap',
        component: () => import('@/page/map/index'),
        meta: { title: '地图网点', keepAlive: false }
    },
];

export default routes;