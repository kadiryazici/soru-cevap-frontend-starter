<script lang="ts" setup>
import UserIcon from 'virtual:icons/carbon/user'
import HomeIcon from 'virtual:icons/carbon/home'
import AddIcon from 'virtual:icons/carbon/add'
import ExitIcon from 'virtual:icons/carbon/exit'
import SidebarItem from './SidebarItem.vue'
import { Color } from '@/common'
import { logOut } from '@/utils'
</script>

<template>
  <nav>
    <div class="sidebar-top">
      <SidebarItem>
        <RouterLink :to="{ name: 'Home' }">
          <HomeIcon />
        </RouterLink>
      </SidebarItem>

      <SidebarItem>
        <button>
          <UserIcon />
        </button>
      </SidebarItem>

      <SidebarItem>
        <button>
          <AddIcon />
        </button>
      </SidebarItem>
    </div>

    <div class="sidebar-bottom">
      <SidebarItem :color="Color.Danger">
        <button @click="logOut">
          <ExitIcon />
        </button>
      </SidebarItem>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
  $gap: 10px;

  nav {
    background-color: var(--bg-2);
    width: var(--sidebar-width);
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    display: inline-flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: $gap;
    padding: 10px 10px;

    .sidebar-top, .sidebar-bottom {
      width: 100%;
      align-items: center;
      display: inline-flex;
      flex-direction: column;
      flex-wrap: nowrap;
      gap: $gap;
    }

    .sidebar-bottom {
      margin-top: auto;
    }

  }
</style>
