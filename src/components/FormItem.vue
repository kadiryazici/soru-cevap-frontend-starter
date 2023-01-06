<script lang="ts" setup>
interface Props {
  errorText?: string | null
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="form-item">
    <header class="form-item-title">
      {{ props.title }}
    </header>

    <slot />

    <div
      v-if="props.errorText != null"
      class="form-item-error"
    >
      {{ props.errorText }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.form-item {
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;

  &-title {
    font-size: 12px;
    color: var(--light);
    margin-bottom: 5px;
  }

  &-error {
    min-height: 12px;
    width: 100%;
    color: var(--danger);
    font-size: 12px;
    margin-top: 5px;
  }
}
</style>
