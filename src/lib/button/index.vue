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
    level: {
        type: String as PropType<'plain' | 'primary' | 'success' | 'danger'>,
        default: 'plain'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
})

const classes = computed(() => {
    const { theme, size, level } = props
    return {
        [`let-go-button-${theme}`]: theme,
        [`let-go-button-${size}`]: size,
        [`let-go-button-${level}`]: level,
    }
})
</script>

<template>
    <button class="let-go-button" :class="classes" :disabled="disabled || loading" @click="$emit('click', $event)">
        <span v-if="loading" class="let-go-loading"></span>
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

    &[disabled] {
        cursor: not-allowed;
        color: grey;
    }

    &+& {
        margin-left: 10px;
    }

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

    // theme
    &.let-go-button-button {

        // level
        &.let-go-button-primary {
            color: white;
            background-color: #79bbff;
            border-color: #79bbff;

            &:hover,
            &:focus {
                background-color: darken(#79bbff, 10%);
                border-color: darken(#79bbff, 10%);
            }
        }

        &.let-go-button-success {
            color: white;
            background-color: #67c23a;
            border-color: #67c23a;

            &:hover,
            &:focus {
                background-color: darken(#67c23a, 10%);
                border-color: darken(#67c23a, 10%);

            }
        }

        &.let-go-button-danger {
            color: white;
            background-color: #f56c6c;
            border-color: #f56c6c;

            &:hover,
            &:focus {
                background-color: darken(#f56c6c, 10%);
                border-color: darken(#f56c6c, 10%);
            }
        }
    }

    &.let-go-button-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;

        &:hover,
        &:focus {
            color: lighten($blue, 10%)
        }

        // level
        &.let-go-button-primary {
            color: #79bbff;

            &:hover,
            &:focus {
                color: darken(#79bbff, 10%);

            }
        }

        &.let-go-button-success {
            color: #67c23a;

            &:hover,
            &:focus {
                color: darken(#67c23a, 10%);

            }
        }

        &.let-go-button-danger {
            color: #f56c6c;

            &:hover,
            &:focus {
                color: darken(#f56c6c, 10%);
            }
        }
    }

    &.let-go-button-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;

        &[disabled] {
            cursor: not-allowed;
            color: grey;
        }

        &:hover,
        &:focus {
            background: darken(white, 5%);
        }

        // level
        &.let-go-button-primary {
            color: #79bbff;

            &:hover,
            &:focus {
                color: darken(#79bbff, 10%);

            }
        }

        &.let-go-button-success {
            color: #67c23a;

            &:hover,
            &:focus {
                color: darken(#67c23a, 10%);

            }
        }

        &.let-go-button-danger {
            color: #f56c6c;

            &:hover,
            &:focus {
                color: darken(#f56c6c, 10%);
            }
        }
    }

    // size
    &.let-go-button-small {
        height: 24px;
        font-size: 12px;
        padding: 0 4px;
    }

    &.let-go-button-large {
        height: 40px;
        font-size: 18px;
        padding: 0 20px;
    }

    .let-go-loading {
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 8px;
        border-width: 2px;
        border-style: solid;
        border-color: $blue $blue $blue transparent;
        animation: let-go-loading 1s linear infinite;
    }


}

@keyframes let-go-loading {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>