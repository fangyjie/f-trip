<script setup>
  import { useRoute } from 'vue-router'
  import { ref, watch } from 'vue'
  import tabbarData from '@/assets/data/tabbar'
  import { getAssetURL } from '@/utils/load_assets.js'

  const curIndex = ref(0)
  const route = useRoute()
  watch(route, () => {
    const index = tabbarData.findIndex((item) => item.path === route.path)
    if (index === -1) return
    curIndex.value = index
  })
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="curIndex" active-color="#ff9854" route>
      <template v-for="(item, index) in tabbarData" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              v-if="curIndex !== index"
              :src="getAssetURL(item.image)"
              alt=""
            />
            <img v-else :src="getAssetURL(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style lang="less" scoped>
  .tab-bar {
    // 局部定义一个变量: 只针对.tab-bar子元素才生效
    // --van-tabbar-item-icon-size: 30px !important;

    // 找到类, 对类中的CSS属性重写
    // :deep(.class)找到子组件的类, 让子组件的类也可以生效
    // :deep(.van-tabbar-item__icon) {
    //   font-size: 50px;
    // }

    img {
      height: 26px;
    }
  }
</style>
