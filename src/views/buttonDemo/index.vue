<script setup lang="ts">
import Button from '@/lib/button/index.vue'
</script>

<template>
    <div>
        <h1>theme示例</h1>
        <Button>你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="text">你好</Button>
        <h1>size示例</h1>
        <Button size="small">你好</Button>
        <Button>你好</Button>
        <Button size="large">你好</Button>
        <h1>button + size</h1>
        <Button size="small">你好</Button>
        <Button>你好</Button>
        <Button size="large">你好</Button>
        <h1>link + size</h1>
        <Button theme="link" size="small">你好</Button>
        <Button theme="link">你好</Button>
        <Button theme="link" size="large">你好</Button>
        <h1>text + size</h1>
        <Button theme="text" size="small">你好</Button>
        <Button theme="text">你好</Button>
        <Button theme="text" size="large">你好</Button>
        <h1>level示例</h1>
        <Button level="plain">你好</Button>
        <Button level="success">你好</Button>
        <Button level="primary">你好</Button>
        <Button level="danger">你好</Button>
        <h1>level + button</h1>
        <Button level="plain">你好</Button>
        <Button level="success">你好</Button>
        <Button level="primary">你好</Button>
        <Button level="danger">你好</Button>
        <h1>level + link</h1>
        <Button level="plain" theme="link">你好</Button>
        <Button level="success" theme="link">你好</Button>
        <Button level="primary" theme="link">你好</Button>
        <Button level="danger" theme="link">你好</Button>
        <h1>level + text</h1>
        <Button level="plain" theme="text">你好</Button>
        <Button level="success" theme="text">你好</Button>
        <Button level="primary" theme="text">你好</Button>
        <Button level="danger" theme="text">你好</Button>
    </div>
</template>

<style scoped lang="scss"></style>