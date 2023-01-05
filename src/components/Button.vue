<script lang="ts" setup>
import { computed } from 'vue'
import { Color, colorToCssVar } from '@/common'

interface Props {
  color?: Color
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  color: Color.Accent,
  disabled: false,
})

const textColor = computed(() => colorToCssVar(props.color))
</script>

<template>
  <button
    :disabled="props.disabled || undefined"
    :class="{ disabled }"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
button {
  padding: 10px 20px;
  font-size: 16px;
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
}
</style>
