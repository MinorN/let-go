<demo>
    支持插槽显示
</demo>

<script setup lang="ts">
import Progress from '@/lib/progress/index.vue'
</script>

<template>
    <div class="wrapper">
        <Progress :percentage="50" theme="primary">
            100!!
        </Progress>
        <Progress :percentage="70" theme="success">
            你好啊
        </Progress>
        <Progress :percentage="40" theme="danger">
            我是插槽
        </Progress>
        <Progress :percentage="90" theme="warning">
            可以直接使用我
        </Progress>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    width: 50%;
}
</style>