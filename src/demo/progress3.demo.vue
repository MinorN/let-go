<demo>
    支持修改高度以及文本显示位置
</demo>

<script setup lang="ts">
import Progress from '@/lib/progress/index.vue'
</script>

<template>
    <div class="wrapper">
        <Progress :percentage="50" theme="primary" :progress-height="20" text-inside>
            100!!
        </Progress>
        <Progress :percentage="70" theme="success" :progress-height="20" text-inside>
            你好啊
        </Progress>
        <Progress :percentage="40" theme="danger" :progress-height="25" text-inside>
            我是插槽
        </Progress>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    width: 50%;
}
</style>