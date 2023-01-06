<script setup lang="ts">
import { watchPostEffect } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import Content from './components/Content.vue'
import Sidebar from './components/Sidebar.vue'

const route = useRoute()

watchPostEffect(() => {
  if (route.meta.withSidebar)
    document.documentElement.setAttribute('data-with-sidebar', '')
  else
    document.documentElement.removeAttribute('data-with-sidebar')
})
</script>

<template>
  <Sidebar v-if="$route.meta.withSidebar" />

  <RouterView v-slot="{ Component }">
    <Content :flex="!!$route.meta.flexPage">
      <Component :is="Component" />
    </Content>
  </RouterView>
</template>
