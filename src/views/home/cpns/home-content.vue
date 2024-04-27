<script setup>
  import { storeToRefs } from 'pinia'
  import { useRouter } from 'vue-router'
  import useHomeStore from '@/stores/modules/home'
  import houseItemV3 from '@/components/house-item-v3/house-item-v3.vue'
  import houseItemV9 from '@/components/house-item-v9/house-item-v9.vue'

  const homeStore = useHomeStore()
  const { houseList } = storeToRefs(homeStore)

  const router = useRouter()
  const toDetail = (houseId) => {
    router.push(`/detail/${houseId}`)
  }
</script>

<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="house-list">
      <template v-for="house in houseList" :key="house.data.houseId">
        <house-item-v3
          v-if="house.discoveryContentType === 3"
          :house-data="house.data"
          @click="toDetail(house.data.houseId)"
        />
        <house-item-v9
          v-else-if="house.discoveryContentType === 9"
          :house-data="house.data"
          @click="toDetail(house.data.houseId)"
        />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .content {
    .title {
      margin: 20px 0 0 20px;
    }

    .house-list {
      padding: 8px;
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>
