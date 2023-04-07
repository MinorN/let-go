<script setup>
import md from '@/markdown/intro.md'

const mdData = ref(md)
</script>

<template>
    <div>
        <div v-html="mdData"></div>
    </div>
</template>

<style scoped lang="scss"></style>