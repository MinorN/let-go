<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { PropType, StyleValue } from 'vue';

const props = defineProps({
    preLabel: {
        type: String,
        default: ''
    },
    percentage: {
        type: Number,
        required: true
    },
    theme: {
        type: String as PropType<'primary' | 'success' | 'danger' | 'warning'>,
        default: 'primary'
    },
    progressHeight: {
        type: Number,
        default: 10
    },
    textInside: {
        type: Boolean,
        default: false
    }
})


const classes = computed(() => {
    return {
        [`let-go-progress-progress-current-${props.theme}`]: props.theme,
        [`let-go-progress-progress-current-text-inside`]: props.textInside
    }
})

</script>

<template>
    <span class="let-go-progress-wrapper">
        <div class="let-go-progress-progress-total"
            :style="{ height: `${progressHeight}px`, borderRadius: `${progressHeight}px` }">
            <div class="let-go-progress-progress-current" :style="{
                width: `${percentage}%`,
                borderRadius: `${progressHeight}px`
            }" :class="classes">
                <span v-if="textInside" :style="{ lineHeight: `${progressHeight}px` }"
                    :class="{ 'let-go-progress-progress-current-text-inside': props.textInside }">
                    <slot>{{ percentage }}%</slot>
                </span>
            </div>
        </div>
        <span class="let-go-progress-progress-label" v-if="!textInside">
            <slot>{{ percentage }}%</slot>
        </span>
    </span>
</template>

<style scoped lang="scss">
.let-go-progress-wrapper {
    display: flex;
    align-items: center;
    position: relative;

    &+& {
        margin-top: 10px;
    }

    .let-go-progress-progress-label {
        font-size: 14px;
        white-space: nowrap;
    }

    .let-go-progress-progress-total {
        display: flex;
        width: 100%;
        height: 10px;
        background-color: #e5e5e5;
        border-radius: 5px;
        margin-right: 10px;
    }

    .let-go-progress-progress-current {
        height: 100%;
        background-color: #1890ff;
        border-radius: 5px;

        &.let-go-progress-progress-current-primary {
            background-color: #1890ff;
        }

        &.let-go-progress-progress-current-success {
            background-color: #67c23a;
        }

        &.let-go-progress-progress-current-danger {
            background-color: #f56c6c;
        }

        &.let-go-progress-progress-current-warning {
            background-color: #e6a23c;
        }

        .let-go-progress-progress-current-text-inside {
            display: flex;
            align-items: center;
            justify-content: end;
            margin: 0 10px;
            vertical-align: middle;
            color: white
        }
    }
}
</style>