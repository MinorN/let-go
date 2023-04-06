import { RouteRecordRaw } from "vue-router"
const routers: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/doc/button',
    },
    {
        path: 'button',
        component: () => import('@/components/button/index.vue')
    }
]

export default routers