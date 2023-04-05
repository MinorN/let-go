import { RouteRecordRaw } from "vue-router"
import Home from '@/views/home/index.vue'
import Doc from '@/views/doc/index.vue'

const routers: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/doc',
        component: Doc
    },
]

export default routers