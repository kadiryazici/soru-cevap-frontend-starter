<script lang="ts" setup>
import { computed } from 'vue'
import { Color, colorToCssVar } from '@/common'

interface Props {
  text?: string
  spaceY?: number
  color?: Color
}

const props = withDefaults(defineProps<Props>(), {
  spaceY: 0,
  color: Color.Bg4,
})

const separatorColor = computed(() => colorToCssVar(props.color))
</script>

<template>
  <div
    class="separator"
    :style="{
      '--separator-space-y': `${props.spaceY}px`,
    }"
  >
    <span
      v-if="props.text != null"
      class="separator-text"
    >
      {{ props.text }}
    </span>

    <div class="separator-line" />
  </div>
</template>

<style lang="scss" scoped>
.separator {
  height: 30px;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  margin-top: var(--separator-space-y);
  margin-bottom: var(--separator-space-y);

  &-text {
    flex-shrink: 0;
    margin-right: 10px;
    font-size: 20px;
    color: var(--light);
    font-weight: bold;
  }

  &-line {
    height: 1px;
    background-color: v-bind(separatorColor);
    width: 100%;
  }
}
</style>
