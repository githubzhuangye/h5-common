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
];

export default routes;