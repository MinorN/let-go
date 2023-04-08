<script setup lang="ts">
import { useRouter } from 'vue-router';
import VueLogo from '@/assets/icon/vue.png'
import TypeScriptLogo from '@/assets/icon/typescript.png'
import BulbLogo from '@/assets/icon/bulb.png'
import { stringify } from 'querystring';

const router = useRouter()
const handleStart = () => {
    router.push('/doc')
}

const imgsMap = [
    { title: '基于 Vue 3', description: '使用了Vue 3 Composition API', img: VueLogo },
    { title: '基于 TypeScript', description: '源代码采用 TypeScript 编写', img: TypeScriptLogo },
    { title: '代码易读', description: '组件代码均简洁易懂', img: BulbLogo },
]
</script>

<template>
    <div class="home">
        <div class="home-content">
            <div class="home-content-header">
                <span class="home-content-header-title">Let Go</span>
                <span class="home-content-header-tip">基于Vue3 + TS 开发的前端组件库</span>
            </div>
            <div class="home-content-action">
                <button @click="handleStart" class="home-content-action-start">开始</button>
            </div>
            <div class="home-content-description">
                <ol class="home-content-description-ol">
                    <li v-for="(item, index) in imgsMap" :key="index">
                        <div class="home-content-description-wrapper">
                            <img :src="item.img">
                            <div>
                                <span class="home-content-description-wrapper-title">{{ item.title }}</span>
                                <span class="home-content-description-wrapper-description">{{ item.description }}</span>
                            </div>
                        </div>
                    </li>
                </ol>
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

        .home-content-action {
            margin-top: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

            .home-content-action-start {
                border: none;
                padding: 10px 30px;
                background-color: var(--start-button-bg);
                color: var(--text-color);
                border-radius: 6px;
                cursor: pointer;
            }
        }

        .home-content-description {
            margin: 80px auto;

            @media (min-width: 800px) {
                width: 800px;

                ol {
                    li {
                        width: 50%;
                    }
                }
            }

            @media (min-width: 1200px) {
                width: 1200px;

                ol {
                    li {
                        width: 33.333%;
                    }
                }
            }

            .home-content-description-ol {
                display: flex;
                flex-wrap: wrap;


                .home-content-description-wrapper {
                    display: flex;
                    margin: 16px 0;
                    justify-content: center;

                    >img {
                        height: 70px;
                    }

                    >div {
                        display: flex;
                        flex-direction: column;

                        .home-content-description-wrapper-title {
                            font-size: 24px;
                        }

                        .home-content-description-wrapper-description {
                            margin-top: 10px;
                            min-width: 250px;
                        }
                    }
                }
            }


        }

    }
}
</style>