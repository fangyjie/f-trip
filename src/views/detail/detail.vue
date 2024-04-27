<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import useDetailStore from '@/stores/modules/detail'
  import DetailSwipe from './cpns/detail_01-swipe.vue'

  const detailStore = useDetailStore()
  const route = useRoute()
  detailStore.fetchHouseDetailData(route.params.id)

  const router = useRouter()
  const onClickLeft = () => {
    router.back()
  }
</script>

<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 轮播图 -->
    <detail-swipe />
  </div>
</template>

<style lang="less" scoped></style>
