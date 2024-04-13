<script setup>
  import useCityStore from './stores/modules/city'

  const cityStore = useCityStore()
</script>

<template>
  <div class="app">
    <router-view></router-view>
    <router-link to="/home">首页</router-link>
    <router-link to="/favor">收藏</router-link>
    <router-link to="/order">订单</router-link>
    <router-link to="/message">消息</router-link>

    <div>pinia测试: {{ cityStore.name }}</div>
    <h2>app</h2>
  </div>
</template>

<style lang="less" scoped></style>
