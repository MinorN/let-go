<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

type DataType = {
    name: string,
    id: number,
    path: string
}
const dataList: DataType[] = [
    { name: '介绍', id: 0, path: '/doc/intro' },
    { name: 'Button按钮', id: 1, path: '/doc/code' },
    { name: 'Button按钮', id: 2, path: '/doc/intro' },
    { name: 'Button按钮', id: 3, path: '/doc/intro' },
    { name: 'Button按钮', id: 4, path: '/doc/intro' },
    { name: 'Button按钮', id: 5, path: '/doc/intro' },
    { name: 'Button按钮', id: 6, path: '/doc/intro' },
    { name: 'Button按钮', id: 7, path: '/doc/intro' },
    { name: 'Button按钮', id: 8, path: '/doc/intro' },
    { name: 'Button按钮', id: 9, path: '/doc/intro' },
    { name: 'Button按钮', id: 10, path: '/doc/intro' },
    { name: 'Button按钮', id: 11, path: '/doc/intro' },
]

const selectedLi = ref<number | null>(null)
const router = useRouter()
const handleClick = (item: DataType) => {
    selectedLi.value = item.id
    router.push(item.path)
}
</script>

<template>
    <div class="doc">
        <div class="doc-content">
            <aside class="doc-content-aside">
                <ul>
                    <li v-for="item in dataList" :class="{ active: selectedLi === item.id }" :key="item.id"
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
        }
    }
}
</style>