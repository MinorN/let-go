<script setup lang="ts">
import Button from '@/lib/button/index.vue'
const onClick = () => {
    console.log('你好')
}
</script>

<template>
    <div>
        <h1>示例1</h1>
        <Button @click="onClick">你好</Button>
        <Button @click="onClick" theme="button">你好</Button>
        <Button @click="onClick" theme="text">你好</Button>
        <Button @click="onClick" theme="link">你好</Button>
        <h1>示例2</h1>
        <Button @click="onClick">你好</Button>
        <h1>示例3</h1>
        <Button @click="onClick">你好</Button>
        <h1>示例4</h1>
        <Button @click="onClick">你好</Button>
    </div>
</template>

<style scoped lang="scss"></style>