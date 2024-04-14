<script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import tabbarData from '@/assets/data/tabbar'
  import { getAssetURL } from '@/utils/load_assets.js'

  const curIndex = ref(0)
  const router = useRouter()
  const itemClick = (index, item) => {
    curIndex.value = index
    router.push(item.path)
  }
</script>

<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="item.text">
      <div class="tab-bar-item" @click="itemClick(index, item)">
        <div class="icon">
          <img
            v-if="curIndex !== index"
            :src="getAssetURL(item.image)"
            alt=""
          />
          <img v-else :src="getAssetURL(item.imageActive)" alt="" />
        </div>
        <div class="text" :class="{ active: curIndex === index }">
          {{ item.text }}
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;

    border-top: 1px solid #f3f3f3;

    .tab-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 36px;
      }

      .text {
        font-size: 12px;
        margin-top: 2px;

        &.active {
          color: var(--primary-color);
        }
      }
    }
  }
</style>
