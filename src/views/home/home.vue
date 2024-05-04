<script setup>
  import useScroll from '@/hooks/useScroll'
  import useHomeStore from '@/stores/modules/home'
  import HomeNavBar from './cpns/home-nav-bar.vue'
  import HomeSearchBox from './cpns/home-search-box.vue'
  import HomeCategories from './cpns/home-categories.vue'
  import HomeContent from './cpns/home-content.vue'
  import searchBar from '@/components/search-bar/search-bar.vue'
  import { watch, computed } from 'vue'

  // 网络请求
  const homeStore = useHomeStore()
  homeStore.fetchHotSuggestsData()
  homeStore.fetchCategoriesData()
  homeStore.fetchHouseListData()

  // 底部更新
  const { isBottom, scrollTop } = useScroll()
  watch(isBottom, (newVal) => {
    if (newVal) {
      homeStore.fetchHouseListData().then(() => (isBottom.value = false))
    }
  })
  // search-bar展示
  const isShowSearch = computed(() => scrollTop.value > 360)
</script>

<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <home-categories />
    <div v-if="isShowSearch" class="home-top top-bar">
      <search-bar />
    </div>
    <home-content />
  </div>
</template>

<style lang="less" scoped>
  .home {
    padding-bottom: 50px;

    .banner {
      img {
        width: 100%;
      }
    }

    .home-top {
      height: 45px;
      padding: 16px 16px 10px;
    }
  }
</style>
