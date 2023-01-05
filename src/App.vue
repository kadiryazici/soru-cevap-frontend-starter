<script setup lang="ts">
import { RouterView } from 'vue-router'
import Content from './components/Content.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <Content>
      <Component :is="Component" />
    </Content>
  </RouterView>
</template>
