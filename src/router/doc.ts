import { RouteRecordRaw } from "vue-router"
import MarkDown from '@/components/markdown/index.vue'
import intro from '@/markdown/intro.md'

import ButtonDemo from '@/views/buttonDemo/index.vue'
import ProgressDemo from '@/views/progressDemo/index.vue'
import { h } from 'vue'
const md = (string: string) => h(MarkDown, { content: string, key: string })
const routers: RouteRecordRaw[] = [
    {
        path: '',
        redirect: '/doc/intro',
    },
    {
        path: 'intro',
        component: md(intro)
    },
    {
        path: 'button',
        component: ButtonDemo
    },
    {
        path: 'progress',
        component: ProgressDemo
    }
]

export default routers