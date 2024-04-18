<script setup>
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'
  import useCityStore from '@/stores/modules/city'
  import useMainStore from '@/stores/modules/main'
  import { formatMonthDay } from '@/utils/format_date'

  const cityStore = useCityStore()
  const { curCity } = storeToRefs(cityStore)

  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
  const startDateStr = computed(() => formatMonthDay(startDate.value, 'MM.DD'))
  const endDateStr = computed(() => formatMonthDay(endDate.value, 'MM.DD'))
</script>

<template>
  <div class="search">
    <h3>当前城市:{{ curCity.cityName }}</h3>
    <h3>住:{{ startDateStr }}</h3>
    <h3>离:{{ endDateStr }}</h3>
  </div>
</template>

<style lang="less" scoped></style>
