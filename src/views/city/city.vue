<script setup>
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'
  import useCityStore from '@/stores/modules/city'
  import cityGroup from './cpns/city-group.vue'

  // 搜索框
  const searchVal = ref('')
  const router = useRouter()
  const onBack = () => {
    router.back()
  }

  // 导航栏
  const tabActive = ref('')

  // 城市数据
  const cityStore = useCityStore()
  const { allCities } = storeToRefs(cityStore)
  // 网络请求
  cityStore.fetchAllCityData()
</script>

<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchVal"
        show-action
        shape="round"
        placeholder="城市/区域/位置"
        @cancel="onBack"
      />
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in allCities" :key="key">
        <city-group :cities-data="value" v-show="key === tabActive" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .city {
    .top {
      position: relative;
      z-index: 2;
    }

    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
  }
</style>
