<script lang="ts" setup>
import { type Color, colorToCssVar } from '@/common'

interface Props {
  color?: Color
  backgroundColor?: Color
}
const props = defineProps<Props>()
</script>

<template>
  <span
    class="detail"
    :style="{
      '--detail-item-color': props.color ? colorToCssVar(props.color) : undefined,
      '--detail-item-background-color': props.backgroundColor ? colorToCssVar(props.backgroundColor) : undefined,
    }"
  >

    <span
      v-if="$slots.icon != null"
      class="detail-icon"
    >
      <slot name="icon" />
    </span>

    <span class="detail-text">
      <slot />
    </span>
  </span>
</template>

<style lang="scss" scoped>
.detail {
  font-size: 12px;
  border-radius: var(--rounded-2);
  background-color: var(--detail-item-background-color, currentColor);
  padding: 5px 10px;
  color: var(--detail-item-color, currentColor);
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  &-text {
    display: inline-flex;
    align-items: center;
  }

  &-icon {
    margin-right: 5px;
    display: inline-flex;
    align-items: center;
  }
}
</style>
