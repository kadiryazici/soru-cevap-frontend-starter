<template>
  <div class="details">
    <div
      v-if="$slots.left != null"
      class="details-left"
    >
      <slot name="left" />
    </div>

    <div
      v-if="$slots.right != null"
      class="details-right"
    >
      <slot name="right" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.details {
  display: inline-flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 5px;

  &-left {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5px;
  }

  &-right {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 5px;
    margin-left: auto;
  }
}
</style>
