<script lang="ts">
import { computed } from 'vue'
import { Color, colorToCssVar } from '@/common'

export enum ButtonSize {
  Small,
  Regular,
}
</script>

<script lang="ts" setup>
interface Props {
  color?: Color
  disabled?: boolean
  size?: ButtonSize
}

const props = withDefaults(defineProps<Props>(), {
  color: Color.Accent,
  disabled: false,
  size: ButtonSize.Regular,
})

const textColor = computed(() => colorToCssVar(props.color))
</script>

<template>
  <button
    :disabled="props.disabled || undefined"
    :class="{
      disabled: props.disabled,
      regular: props.size === ButtonSize.Regular,
      small: props.size === ButtonSize.Small,
    }"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  color: v-bind(textColor);
  border-radius: var(--rounded-2);
  border: 1px solid var(--dark-gray);
  cursor: pointer;
  transition-property: border-color, transform, box-shadow;
  transition-duration: .20s;
  will-change: border-color, transform, box-shadow;
  box-sizing: 0px 0px 0px 0px transparent;
  outline: none;

  &.disabled {
    cursor: not-allowed;
    color: var(--dark-gray);
  }

  &:not(.disabled) {
    &:hover {
      border-color: v-bind(textColor);
    }

    &:active {
      transform: scale(0.97)
    }

    &:focus-visible {
      box-shadow: 0px 0px 0px 1px var(--light);
    }
  }

  &.regular {
    padding: 10px 20px;
    font-size: 16px;
  }

  &.small {
    padding: 8px 14px;
    font-size: 14px;
  }
}
</style>
