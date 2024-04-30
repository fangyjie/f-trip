<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { computed, onUnmounted } from 'vue'
  import useDetailStore from '@/stores/modules/detail'
  import DetailSwipe from './cpns/detail_01-swipe.vue'
  import DetailInfos from './cpns/detail_02-infos.vue'
  import DetailFacility from './cpns/detail_03-facility.vue'
  import DetailLandlord from './cpns/detail_04-landlord.vue'
  import DetailComment from './cpns/detail_05-comment.vue'
  import DetailNotice from './cpns/detail_06-notice.vue'
  import DetailMap from './cpns/detail_07-map.vue'
  import DetailIntro from './cpns/detail_08-intro.vue'

  const detailStore = useDetailStore()
  const route = useRoute()
  detailStore.fetchHouseDetailData(route.params.id)

  const router = useRouter()
  const onClickLeft = () => {
    router.back()
  }

  const ensure = computed(() => detailStore.houseDetail.mainPart?.ensureModule)

  onUnmounted(() => (detailStore.houseDetail = {}))
</script>

<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="detailStore.houseDetail.mainPart">
      <!-- 轮播图 -->
      <detail-swipe />
      <!-- 房屋信息 -->
      <detail-infos />
      <!-- 房屋设施 -->
      <detail-facility />
      <!-- 房东介绍 -->
      <detail-landlord />
      <!-- 热门评论 -->
      <detail-comment />
      <!-- 预定须知 -->
      <detail-notice />
      <!-- 位置周边 -->
      <detail-map />
      <!-- 价格说明 -->
      <detail-intro />
    </div>
    <div class="footer">
      <img :src="ensure?.icon" alt="" />
      <div class="text">弘源旅途，永无止境!</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .detail {
    background-color: #fff;

    .footer {
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 123px;
      }

      .text {
        margin-top: 12px;
        font-size: 12px;
        color: #7688a7;
      }
    }
  }
</style>
