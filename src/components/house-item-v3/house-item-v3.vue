<script setup>
  import { defineProps } from 'vue'

  defineProps({
    houseData: {
      type: Object,
      default: () => ({})
    }
  })
</script>

<template>
  <div class="house-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="houseData.image?.url" alt="" />
      </div>
      <div class="text">
        <div class="position">
          <img src="@/assets/img/home/location.png" alt="" />
          <span>{{ houseData.location }}</span>
        </div>
        <div class="house-name">
          {{ houseData.houseName }}
        </div>
        <div class="summary-text">
          {{ houseData.summaryText }}
        </div>
        <div class="price">
          <span class="final-price">¥ {{ houseData.finalPrice }}</span>
          <span class="old-price">¥ {{ houseData.productPrice }}</span>
          <span class="diff-price">
            {{ houseData.priceTipBadge?.text }}
          </span>
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
      background-color: #fff;

      .cover {
        img {
          width: 100%;
          vertical-align: top;
          border-top-left-radius: 6px;
          border-top-right-radius: 6px;
        }
      }

      .text {
        font-size: 12px;
        color: #666666;
        padding: 8px 10px;

        .position {
          img {
            width: 12px;
          }
        }

        .house-name {
          font-size: 14px;
          color: #333333;
          margin: 5px 0;

          word-break: break-all;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2; /* 这里是超出几行省略 */
          overflow: hidden;
        }

        .price {
          margin: 8px 0;
          display: flex;
          align-items: flex-start;

          .final-price {
            font-size: 14px;
            color: #ff9854;
          }

          .old-price {
            color: #999;
            text-decoration: line-through;
            margin: 0 3px;
          }

          .diff-price {
            color: #fff;
            padding: 0 6px;
            border-radius: 8px;
            background-image: linear-gradient(270deg, #f66, #ff9f9f);
          }
        }
      }
    }
  }
</style>
