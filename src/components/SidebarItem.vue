<script lang="ts" setup>
import { computed } from 'vue'
import { Color, colorToCssVar } from '@/common'

interface Props {
  color?: Color
}

const props = withDefaults(defineProps<Props>(), {
  color: Color.LightGray,
})

const textColor = computed(() => colorToCssVar(props.color))
</script>

<template>
  <div class="sidebar-item">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.sidebar-item {
  display: contents;

  :deep(.unplugin-icon) {
    width: 30px;
    height: 30px;
    color: v-bind(textColor)
  }

  :deep(> *) {
    width: 100%;
    padding: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: var(--rounded-0-5);

    &:hover, &:focus-visible {
      background-color: var(--bg-4);
    }

    &:active {
      background-color: var(--bg-1);
    }
}
}
</style>
