<script setup lang="ts">
import Button1 from '../../demo/button1.demo.vue'
import Button2 from '../../demo/button2.demo.vue'
import Button3 from '../../demo/button3.demo.vue'
import Button4 from '../../demo/button4.demo.vue'
import Code from '@/components/code/index.vue'
</script>

<template>
    <div>
        <h1>Button 示例</h1>
        <section>
            <h2> <span>#</span> 常规使用</h2>
            <p>使用 <span>theme</span> 属性来改变 <span>Button</span> 组件的样式</p>
            <Code :component="Button1" />
        </section>
        <section>
            <h2> <span>#</span> 支持size</h2>
            <p>使用 <span>size</span> 属性来改变 <span>Button</span> 组件的大小</p>
            <Code :component="Button2" />
        </section>
        <section>
            <h2> <span>#</span> 支持level</h2>
            <p>使用 <span>level</span> 属性来改变 <span>Button</span> 组件的重要程度</p>
            <Code :component="Button3" />
        </section>
        <section>
            <h2> <span>#</span> 支持disabled</h2>
            <p>使用 <span>disabled</span> 属性来改变 <span>Button</span> 组件的状态</p>
            <Code :component="Button4" />
        </section>
    </div>
</template>

<style scoped lang="scss">
h1 {
    margin-bottom: 10px;
}

span {
    color: red;
    line-height: 2;
}
</style>