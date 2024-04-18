<script setup>
  import { storeToRefs } from 'pinia'
  import useHomeStore from '@/stores/modules/home'

  const homeStore = useHomeStore()
  const { categories } = storeToRefs(homeStore)
</script>

<template>
  <div class="categories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
  .categories {
    height: 55px;
    padding: 0 10px;
    margin-top: 20px;
    overflow-x: auto;
    background-color: #fff;
    display: flex;

    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      width: 70px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 32px;
      }

      .title {
        font-size: 12px;
        margin-top: 4px;
      }
    }
  }
</style>
