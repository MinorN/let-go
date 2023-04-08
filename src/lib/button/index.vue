<script setup lang="ts">
import { PropType, computed } from 'vue';
const props = defineProps({
    theme: {
        type: String as PropType<'button' | 'text' | 'link'>,
        default: 'button'
    },
    size: {
        type: String as PropType<'small' | 'default' | 'large'>,
        default: 'default'
    },
    disabled: {
        type: Boolean,
        default: false
    },

})

const classes = computed(() => {
    const { theme, size } = props
    return {
        [`let-go-button-${theme}`]: theme,
        [`let-go-button-${size}`]: size,
    }
})
</script>

<template>
    <button class="let-go-button" :class="classes">
        <slot />
    </button>
</template>

<style lang="scss">
$height: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #79bbff;
$radius: 4px;

.let-go-button {
    height: $height;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out(black, 0.95);

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }
}
</style>