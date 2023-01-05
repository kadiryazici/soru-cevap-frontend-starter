<script setup lang="ts">
import { RouterView } from 'vue-router'
import Content from './components/Content.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <Sidebar />
  <RouterView v-slot="{ Component }">
    <Content>
      <Component :is="Component" />
    </Content>
  </RouterView>
</template>
