<script setup>
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { computed, ref } from 'vue'
  import useMainStore from '@/stores/modules/main'
  import useHomeStore from '@/stores/modules/home'
  import useCityStore from '@/stores/modules/city'
  import { formatMonthDay, getDiffDays } from '@/utils/format_date'

  const router = useRouter()

  // 城市选择
  const cityStore = useCityStore()
  const { curCity } = storeToRefs(cityStore)
  const cityClick = () => {
    router.push('/city')
  }

  // 定位
  const posClick = () => {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        console.log('获取位置成功:', res)
      },
      (err) => {
        console.log('获取位置失败:', err)
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    )
  }

  // 住房日期
  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
  const startDateStr = computed(() => formatMonthDay(startDate.value))
  const endDateStr = computed(() => formatMonthDay(endDate.value))
  const stayTime = computed(() => getDiffDays(startDate.value, endDate.value))
  // 是否显示日历弹窗
  const show = ref(false)
  const selectDate = () => {
    show.value = true
  }
  const onConfirm = (dates) => {
    mainStore.startDate = dates[0]
    mainStore.endDate = dates[1]
    show.value = false
  }

  // 热门建议
  const homeStore = useHomeStore()
  const { hotSuggests } = storeToRefs(homeStore)

  // 搜索
  const onSearch = () => {
    router.push('/search')
  }
</script>

<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="position bottom-gray-line">
      <div class="city" @click="cityClick">
        {{ curCity.cityName }}
      </div>
      <div class="cur-pos" @click="posClick">
        <span class="content">我的位置</span>
        <div class="icon">
          <img src="@/assets/img/home/icon_location.png" alt="" />
        </div>
      </div>
    </div>

    <!-- 住房日期 -->
    <div class="date bottom-gray-line" @click="selectDate">
      <div class="start item">
        <div class="title">入住</div>
        <div class="time">{{ startDateStr }}</div>
      </div>
      <div class="stay">
        {{ '共' + stayTime + '晚' }}
      </div>
      <div class="end item">
        <div class="title">离店</div>
        <div class="time">{{ endDateStr }}</div>
      </div>
    </div>
    <van-calendar
      v-model:show="show"
      type="range"
      color="#ff9854"
      :round="false"
      @confirm="onConfirm"
    />

    <!-- 价格/人数选择 -->
    <div class="price-count bottom-gray-line">
      <div class="price">价格不限</div>
      <div class="count">人数不限</div>
    </div>

    <!-- 关键字 -->
    <div class="key bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="advice">
      <template v-for="item in hotSuggests" :key="item.tagText.text">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <div class="search-btn">
      <div class="btn" @click="onSearch">开始搜索</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .search-box {
    padding: 0 20px;

    .position {
      height: 44px;
      display: flex;
      align-items: center;

      .city {
        padding-right: 10px;
        flex: 1;
      }

      .cur-pos {
        display: flex;
        align-items: center;

        .content {
          font-size: 12px;
          color: #666666;
          margin-right: 8px;
        }

        img {
          width: 18px;
          vertical-align: top;
        }
      }
    }

    .date {
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .title {
          font-size: 12px;
          color: #999999;
        }

        .time {
          margin-top: 3px;
        }
      }

      .stay {
        font-size: 12px;
        color: #666666;
      }

      .end {
        padding-right: 20px;
      }
    }

    .price-count {
      color: #999999;
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .count {
        padding-right: 25px;
      }
    }

    .key {
      color: #999999;
      height: 44px;
      line-height: 44px;
    }

    .advice {
      margin: 10px 0;
      display: flex;
      flex-wrap: wrap;
      align-content: center;

      .item {
        font-size: 12px;
        margin: 3px;
        padding: 4px 8px;
        border-radius: 14px;
      }
    }

    .search-btn {
      .btn {
        height: 38px;
        max-height: 50px;
        font-weight: 500;
        font-size: 18px;
        line-height: 38px;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        background-image: var(--theme-linear-gradient);
      }
    }
  }
</style>
