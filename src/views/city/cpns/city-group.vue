<script setup>
  import { useRouter } from 'vue-router'
  import { defineProps, computed } from 'vue'
  import useCityStore from '@/stores/modules/city'

  const props = defineProps({
    citiesData: {
      type: Object,
      default: () => ({})
    }
  })

  // 索引字符列表
  const indexList = computed(() => {
    const res = props.citiesData.cities?.map((item) => item.group)
    res?.unshift('#')
    return res
  })

  // 城市选择事件
  const cityStore = useCityStore()
  const router = useRouter()
  const onClick = (city) => {
    cityStore.curCity = city
    router.back()
  }
</script>

<template>
  <div class="group">
    <van-index-bar :index-list="indexList" highlight-color="#ff9854">
      <!-- 热门城市 -->
      <van-index-anchor index="热门" />
      <div class="hot">
        <template v-for="city in citiesData.hotCities" :key="city.cityId">
          <div class="item" @click="onClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <!-- 城市列表 -->
      <template v-for="cities in citiesData.cities" :key="cities.group">
        <van-index-anchor :index="cities.group" />
        <template v-for="city in cities.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="onClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
  .group {
    .hot {
      padding: 10px;
      padding-right: 20px;
      background-color: #fff;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: center;

      .item {
        width: 70px;
        height: 28px;
        line-height: 28px;
        font-size: 12px;
        margin: 6px;
        background-color: #fff4ec;
        border-radius: 14px;
        text-align: center;
      }
    }
  }
</style>
