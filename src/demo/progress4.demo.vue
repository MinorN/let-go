<demo>
    支持实时动态更新进度
</demo>

<script setup lang="ts">
import Progress from '@/lib/progress/index.vue'
import { onBeforeUnmount, ref } from 'vue';
const percentage = ref(0)
const timer = ref()
timer.value = setInterval(() => {
    if (percentage.value >= 100) {
        percentage.value = 0
    } else {
        percentage.value += 10
    }
}, 1000)

onBeforeUnmount(() => {
    clearInterval(timer.value)
})
</script>

<template>
    <div class="wrapper">
        <Progress :percentage="percentage" theme="primary" :progress-height="20">
        </Progress>
    </div>
</template>


<style lang="scss" scoped>
.wrapper {
    width: 50%;
}
</style>