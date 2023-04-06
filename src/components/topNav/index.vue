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
            <div class="nav-menu-component">
                <router-link to="/doc">组件</router-link>
            </div>
            <a href="https://github.com/MinorN/let-go" target="_blank">
                <img class="nav-menu-github" :src="GithubLogo" alt="GithubLogo">
            </a>
        </div>
    </nav>
    <main class="main">
        <router-view />
    </main>
</template>

<style scoped lang="scss">
.nav {
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    height: 55px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    background-color: var(--nav-bg);
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
            font-size: 14px;
            margin-right: 10px;
            cursor: pointer;
        }

        .nav-menu-component {
            font-size: 14px;
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