<script setup lang="ts">
import { ref } from 'vue';

type DataType = {
    name: string, id: number
}
const dataList: DataType[] = [
    { name: 'Button按钮', id: 1 },
    { name: 'Button按钮', id: 2 },
    { name: 'Button按钮', id: 3 },
    { name: 'Button按钮', id: 4 },
    { name: 'Button按钮', id: 5 },
    { name: 'Button按钮', id: 6 },
    { name: 'Button按钮', id: 7 },
    { name: 'Button按钮', id: 8 },
    { name: 'Button按钮', id: 9 },
    { name: 'Button按钮', id: 10 },
    { name: 'Button按钮', id: 11 },
]

const selectedLi = ref<number | null>(null)
const handleClick = (item: DataType) => {
    selectedLi.value = item.id
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