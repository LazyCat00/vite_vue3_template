// 对外暴露配置路由（常量路由）
export const constantRoute = [
  {
    name: 'login', // 命名路由--做权限会用到
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    // 登入成功后展示数据的路由
    name: 'layout',
    path: '/',
    component: () => import('@/views/home/index.vue'),
  },
  {
    // 404路由
    name: '404',
    path: '/404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    // 任意路由
    name: 'any',
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]
