<script lang="ts">
// TODO 优化
import "../../../node_modules/github-markdown-css/github-markdown.css";
export default {
    props: {
        content: {
            type: String,
            required: true
        }
    },
};
</script>

<template>
    <div class="markdown-body" v-html="content"></div>
</template>
