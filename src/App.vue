<script setup>
  import { useRoute } from 'vue-router'
  import TabBar from '@/components/tab-bar/tab-bar.vue'

  const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-show="!route.meta.hideTabBar" />
  </div>
</template>

<style lang="less" scoped></style>
