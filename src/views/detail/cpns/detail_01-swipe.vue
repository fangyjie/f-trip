<script setup>
  import useDetailStore from '@/stores/modules/detail'

  const detailStore = useDetailStore()
  const housePics =
    detailStore.houseDetail.mainPart.topModule.housePicture.housePics
</script>

<template>
  <div class="swipe">
    <van-swipe>
      <template v-for="(item, index) in housePics" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active, total }">
        <div class="indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
  .swipe {
    img {
      height: 250px;
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
    }
  }
</style>
