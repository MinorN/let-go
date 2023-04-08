<demo>
    直线进度条，支持theme
</demo>

<script setup lang="ts">
import Progress from '@/lib/progress/index.vue'
</script>

<template>
    <div class="wrapper">
        <Progress :percentage="50" theme="primary" />
        <Progress :percentage="50" theme="success" />
        <Progress :percentage="50" theme="danger" />
        <Progress :percentage="50" theme="warning" />
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    width: 50%;
}
</style>