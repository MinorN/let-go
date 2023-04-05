<script setup lang="ts">
</script>

<template>
    <div class="home">
        <div class="home-content">
            <div class="home-content-header">
                <span class="home-content-header-title">Let Go</span>
                <span class="home-content-header-tip">基于Vue3 + TS 开发的前端组件库</span>
            </div>
            <div class="home-content-description">

            </div>
            <div class="home-content-action">
                <a href="">github</a>
                <a href="">开始</a>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.home {

    .home-content {
        padding: 80px 40px;

        .home-content-header {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .home-content-header-title {
                font-weight: 600;
                font-size: 36px;
            }

            .home-content-header-tip {
                padding-top: 10px;
                color: var(--note-font-color);
                font-size: 18px;
            }
        }

        .home-content-description {}

        .home-content-action {}
    }
}
</style>