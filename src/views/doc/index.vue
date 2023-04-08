<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

type DataType = {
    name: string,
    id: number,
    path: string
}
const dataList: DataType[] = [
    { name: '介绍', id: 0, path: '/doc/intro' },
    { name: 'Button按钮', id: 1, path: '/doc/button' },
    { name: 'progress进度条', id: 2, path: '/doc/progress' },
]
const router = useRouter()
const route = useRoute()
const selectedLi = ref<string | null>(route.path)

watch(() => route.path, (newPath) => {
    console.log('run')
    selectedLi.value = newPath
})

const handleClick = (item: DataType) => {
    router.push(item.path)
}
</script>

<template>
    <div class="doc">
        <div class="doc-content">
            <aside class="doc-content-aside">
                <ul>
                    <li v-for="item in dataList" :class="{ active: selectedLi === item.path }" :key="item.id"
                        @click="handleClick(item)">{{ item.name }}</li>
                </ul>
            </aside>
            <main class="doc-content-main">
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<style scoped lang="scss">
.doc {
    padding: 20px 80px;


    .doc-content {
        display: flex;

        .doc-content-aside {
            width: 200px;
            height: calc(100vh - 95px);
            overflow-y: auto;

            >ul {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 20px;

                >li {
                    width: 100%;
                    cursor: pointer;
                    padding: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    font-weight: 500;
                    font-size: 14px;

                    &.active {
                        color: #409eff;
                        background-color: #ECF5FF;
                    }
                }
            }
        }

        .doc-content-main {
            width: 100%;
            padding: 30px 40px;
            height: calc(100vh - 95px);
            overflow-y: auto;
        }
    }
}
</style>