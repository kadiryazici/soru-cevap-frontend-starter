<template>
  <main class="content">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.content {
  width: 100%;
  max-width: var(--content-width);
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}
</style>
