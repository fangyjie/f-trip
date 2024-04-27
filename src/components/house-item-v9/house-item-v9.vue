<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    houseData: {
      type: Object,
      default: () => ({})
    }
  })

  const score = computed(() => Number(props.houseData.commentScore))
</script>

<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="houseData.image?.url" alt="" />
      </div>
      <div class="text">
        <div class="summary-text">
          {{ houseData.summaryText }}
        </div>
        <div class="house-name">
          {{ houseData.houseName }}
        </div>
        <div class="score-price">
          <div class="score">
            <van-rate
              :model-value="score"
              readonly
              allow-half
              size="12px"
              color="#fff"
            />
          </div>
          <div class="price">¥ {{ houseData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .house-item {
    width: 50%;
    height: 240px;

    .item-inner {
      margin: 5px;
      border-radius: 6px;
      position: relative;

      .cover {
        img {
          width: 100%;
          border-radius: 6px;
        }
      }

      .text {
        font-size: 14px;
        color: #fff;
        padding: 8px 10px;
        position: absolute;
        bottom: 0;

        .summary-text {
          font-size: 12px;
        }

        .house-name {
          margin: 5px 0;

          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; /* 这里是超出几行省略 */
          overflow: hidden;
        }

        .score-price {
          margin: 10px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
</style>
