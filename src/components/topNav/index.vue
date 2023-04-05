<script setup lang="ts">
import Logo from '@/assets/icon/logo.png'
import GithubLogo from '@/assets/icon/github.png'
</script>

<template>
    <nav class="nav">
        <div class="nav-logo">
            <router-link to="/">
                <img class="nav-logo-img" :src="Logo" alt="logo">
            </router-link>
        </div>
        <div class="nav-menu">
            <div class="nav-menu-guide">指南</div>
            <div class="nav-menu-component">组件</div>
            <a href="https://github.com/MinorN/let-go" target="_blank">
                <img class="nav-menu-github" :src="GithubLogo" alt="GithubLogo">
            </a>
        </div>
    </nav>
</template>

<style scoped lang="scss">
.nav {
    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    border-bottom: 1px solid var(--nav-border-color);

    .nav-logo {
        display: flex;
        align-items: center;

        .nav-logo-img {
            height: 36px;
        }
    }

    .nav-menu {
        display: flex;
        align-items: center;
        height: 100%;

        .nav-menu-guide {
            margin-right: 10px;
            cursor: pointer;
        }

        .nav-menu-component {
            margin-right: 10px;
            cursor: pointer;
        }

        .nav-menu-github {
            height: 24px;
            cursor: pointer;
        }
    }
}
</style>