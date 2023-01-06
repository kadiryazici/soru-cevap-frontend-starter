<script lang="ts" setup>
interface Props {
  flex?: boolean | null
}

const props = withDefaults(defineProps<Props>(), {
  flex: false,
})
</script>

<template>
  <main
    class="content"
    :class="{ 'content-flex': props.flex }"
  >
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  min-height: 100%;
  max-width: var(--content-width);
  margin-left: auto;
  margin-right: auto;
  padding: 20px;

  &-flex {
    display: flex !important;
  }
}
</style>
