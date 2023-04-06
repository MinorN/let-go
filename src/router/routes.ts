import { RouteRecordRaw } from "vue-router"
import Home from '@/views/home/index.vue'
import Doc from '@/views/doc/index.vue'
import DocRouters from './doc'

const routers: RouteRecordRaw[] = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/doc',
        component: Doc,
        children: [...DocRouters]
    },
]

export default routers