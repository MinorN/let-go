<script>
import md from '@/markdown/intro.md'
export default {
    name: 'Intro',
    data () {
        return {
            md
        }
    }
}
</script>

<template>
    <div>
        <div v-html="md"></div>
    </div>
</template>

<style scoped lang="scss"></style>