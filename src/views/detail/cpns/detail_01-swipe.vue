<script setup>
  import { computed } from 'vue'
  import useDetailStore from '@/stores/modules/detail'

  const detailStore = useDetailStore()
  const housePics = computed(
    () => detailStore.houseDetail.mainPart?.topModule?.housePicture?.housePics
  )
  console.log(housePics)
</script>

<template>
  <div class="swipe">
    <van-swipe>
      <van-swipe-item v-for="item in housePics" :key="item.orderIndex">
        <img :src="item.url" alt="" />
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
  .swipe {
    img {
      height: 250px;
    }
  }
</style>
