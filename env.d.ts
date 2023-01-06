/// <reference types="vite/client" />

declare module 'vue-router' {
  export interface RouteMeta {
    withSidebar?: boolean
    flexPage?: boolean
  }
}

export {}