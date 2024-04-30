<script setup>
  import useDetailStore from '@/stores/modules/detail'

  const detailStore = useDetailStore()
  const introduction = detailStore.houseDetail.mainPart.introductionModule
</script>

<template>
  <div class="intro">
    <h2 class="title">{{ introduction.title }}</h2>
    <div class="content">{{ introduction.introduction }}</div>
  </div>
</template>

<style lang="less" scoped>
  .intro {
    padding: 16px 12px;
    border-top: 5px solid #f2f3f4;

    .title {
      font-size: 14px;
    }

    .content {
      margin-top: 10px;
      font-size: 12px;
      line-height: 1.5;
      color: #666;
    }
  }
</style>
