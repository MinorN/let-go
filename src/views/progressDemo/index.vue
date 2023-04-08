<script setup lang="ts">
import Code from '@/components/code/index.vue'
import ProgressDemo1 from '@/demo/progress1.demo.vue'
import ProgressDemo2 from '@/demo/progress2.demo.vue'
import ProgressDemo3 from '@/demo/progress3.demo.vue'
import ProgressDemo4 from '@/demo/progress4.demo.vue'
</script>

<template>
    <div>
        <h1>Progress 示例</h1>
        <section>
            <h2> <span>#</span> 常规使用</h2>
            <p>使用 <span>percentage</span> 属性来改变 <span>Progress</span> 组件对应的百分比，该属性是 <span>必填</span> 选项，且值为
                <span>0~100</span>
            </p>
            <Code :component="ProgressDemo1" />
        </section>
        <section>
            <h2> <span>#</span> 插槽显示</h2>
            <p>使用 <span>默认插槽</span> 来改变 <span>Progress</span> 组件后面显示的内容</p>
            <Code :component="ProgressDemo2" />
        </section>
        <section>
            <h2> <span>#</span> 修改高度及显示位置</h2>
            <p>使用 <span>progress-height</span> 来改变 <span>Progress</span> 组件的高度，并且可以通过 <span>text-inside</span> 属性来改变进度条内部文字
            </p>
            <Code :component="ProgressDemo3" />
        </section>
        <section>
            <h2> <span>#</span> 支持实时动态更新进度</h2>
            <p>只要动态修改 <span>percentage</span> 属性的值，进度条就会实时更新</p>
            <Code :component="ProgressDemo4" />
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