import { URL, fileURLToPath } from 'node:url'
import Icons from 'unplugin-icons/vite'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Icons({
      compiler: 'vue3',
      defaultClass: 'unplugin-icon',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
