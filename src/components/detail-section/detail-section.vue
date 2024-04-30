<script setup>
  defineProps({
    title: {
      type: String,
      default: ''
    },
    more: {
      type: String,
      default: ''
    }
  })
</script>

<template>
  <div class="section">
    <div class="header" v-if="title">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot></slot>
    </div>
    <div class="footer" v-if="more">
      <div class="more">{{ more }}</div>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style lang="less" scoped>
  .section {
    padding: 0 15px;
    margin-top: 12px;
    border-top: 5px solid #f2f3f4;

    .header {
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #eee;

      .title {
        font-size: 20px;
        color: #333;
      }
    }

    .content {
      padding: 8px 0;
    }

    .footer {
      color: var(--primary-color);
      font-size: 14px;
      font-weight: 600;
      height: 44px;
      line-height: 44px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
</style>
