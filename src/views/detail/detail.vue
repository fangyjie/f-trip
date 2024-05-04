<script setup>
  import { useRoute, useRouter } from 'vue-router'
  import { ref, computed, watch, onUnmounted } from 'vue'
  import useDetailStore from '@/stores/modules/detail'
  import useScroll from '@/hooks/useScroll'
  import DetailSwipe from './cpns/detail_01-swipe.vue'
  import DetailInfos from './cpns/detail_02-infos.vue'
  import DetailFacility from './cpns/detail_03-facility.vue'
  import DetailLandlord from './cpns/detail_04-landlord.vue'
  import DetailComment from './cpns/detail_05-comment.vue'
  import DetailNotice from './cpns/detail_06-notice.vue'
  import DetailMap from './cpns/detail_07-map.vue'
  import DetailIntro from './cpns/detail_08-intro.vue'
  import TabControl from '@/components/tab-control/tab-control.vue'

  // 发送网络请求
  const detailStore = useDetailStore()
  const route = useRoute()
  detailStore.fetchHouseDetailData(route.params.id)

  // 返回
  const router = useRouter()
  const onClickLeft = () => {
    router.back()
  }

  // tab-control
  const sectionEls = ref({})
  const names = computed(() => Object.keys(sectionEls.value))
  const getSectionRef = (value) => {
    if (!value) return
    const name = value.$el.getAttribute('name')
    sectionEls.value[name] = value.$el
  }
  // 操作
  const detailRef = ref()
  const { scrollTop } = useScroll()
  const showTabControl = computed(() => scrollTop.value >= 300)
  // 点击tab跳到相应位置
  let isClick = false
  let curDis = -1
  const tabClick = (item) => {
    let topDis = sectionEls.value[item].offsetTop
    const names = Object.keys(sectionEls.value)
    if (names[0] !== item) topDis -= 44

    isClick = true
    curDis = topDis

    document.documentElement.scrollTo({
      top: topDis,
      behavior: 'smooth'
    })
  }
  // 滚动到某个位置时修改为对应的curItem
  const tabRef = ref()
  watch(scrollTop, (newVal) => {
    // 对tab的点击事件引起的滚动事件进行特殊处理
    if (newVal === curDis) {
      isClick = false
      curDis = -1
    }
    if (isClick) return

    // 获取当前位置对应的curItem
    const names = Object.keys(sectionEls.value)
    const len = names.length
    let curItem = names[len - 1]
    for (let i = 1; i < len; i++) {
      let topDis = sectionEls.value[names[i]].offsetTop
      if (newVal < topDis - 44) {
        curItem = names[i - 1]
        break
      }
    }

    // 修改curItem
    tabRef?.value?.tabChange(curItem)
  })

  // footer
  const ensure = computed(() => detailStore.houseDetail.mainPart?.ensureModule)

  // 清空数据
  onUnmounted(() => (detailStore.houseDetail = {}))
</script>

<template>
  <div class="detail" ref="detailRef">
    <tab-control
      v-if="showTabControl"
      :names="names"
      @tabItemClick="tabClick"
      ref="tabRef"
    />
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
      <detail-infos name="描述" :ref="getSectionRef" />
      <!-- 房屋设施 -->
      <detail-facility name="设施" :ref="getSectionRef" />
      <!-- 房东介绍 -->
      <detail-landlord name="房东" :ref="getSectionRef" />
      <!-- 热门评论 -->
      <detail-comment name="评论" :ref="getSectionRef" />
      <!-- 预定须知 -->
      <detail-notice name="须知" :ref="getSectionRef" />
      <!-- 位置周边 -->
      <detail-map name="周边" :ref="getSectionRef" />
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
