<script setup>
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'
  import useMainStore from '@/stores/modules/main'
  import { formatMonthDay } from '@/utils/format_date'

  const mainStore = useMainStore()
  const { startDate, endDate } = storeToRefs(mainStore)
  const startDateStr = computed(() => formatMonthDay(startDate.value, 'MM.DD'))
  const endDateStr = computed(() => formatMonthDay(endDate.value, 'MM.DD'))
</script>

<template>
  <div class="search-bar">
    <div class="select-time">
      <div class="start item">
        <span class="name">住</span>
        <span class="date">{{ startDateStr }}</span>
      </div>
      <div class="end item">
        <span class="name">离</span>
        <span class="date">{{ endDateStr }}</span>
      </div>
    </div>
    <div class="content">
      <span class="keyword">关键字/位置/民宿</span>
    </div>
    <div class="right">
      <i class="icon-search"></i>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .search-bar {
    color: #999999;
    padding: 0 10px;
    background-color: #f7f8fb;
    border-radius: 6px;
    height: 45px;
    line-height: 45px;
    display: flex;
    align-items: center;

    .select-time {
      display: flex;
      flex-direction: column;

      .item {
        line-height: normal;
        font-size: 10px;
        display: flex;
        justify-content: center;
        align-items: center;

        .date {
          color: #333333;
          padding: 2px 10px 0 3px;
        }
      }
    }

    .content {
      flex: 1;
      font-size: 14px;
      padding: 0 6px;
      border-left: 1px solid #fff;
    }

    .right {
      display: flex;
      align-items: center;

      .icon-search {
        width: 24px;
        height: 24px;
        display: inline-block;
        background: url('@/assets/img/home/home-sprite.png');
        background-position: -29px -151px;
        background-size: 207px 192px;
      }
    }
  }
</style>
