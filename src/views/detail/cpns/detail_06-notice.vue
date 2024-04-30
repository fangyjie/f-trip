<script setup>
  import useDetailStore from '@/stores/modules/detail'
  import DetailSection from '@/components/detail-section/detail-section.vue'

  const detailStore = useDetailStore()
  const orderRules =
    detailStore.houseDetail.mainPart.dynamicModule.rulesModule.orderRules
</script>

<template>
  <div class="notice">
    <detail-section title="预定须知">
      <div class="list">
        <template v-for="item in orderRules" :key="item.title">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="introduction">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
  .notice {
    .list {
      font-size: 12px;

      .item {
        margin: 10px 0 20px;
        display: flex;

        .title {
          color: #666;
          width: 64px;
        }

        .introduction {
          color: #333;
          flex: 1;
        }
      }
    }
  }
</style>
