<script setup>
  import useDetailStore from '@/stores/modules/detail'

  const detailStore = useDetailStore()
  const housePics =
    detailStore.houseDetail.mainPart.topModule.housePicture.housePics
  // 对数据进行分类
  const res = {}
  const getKey = (title) => {
    const group = title.match(/【(.*?)】/i)
    return group[1]
  }
  housePics.forEach((item) => {
    const key = getKey(item.title)
    if (!res[key]) res[key] = []
    res[key].push(item)
  })
  // 对当前轮播图序号进行自定义处理
  const getActive = (active, key) => {
    const housePic = housePics[active]
    const arr = res[key]
    return arr.findIndex((item) => item === housePic) + 1
  }
</script>

<template>
  <div class="swipe">
    <van-swipe>
      <template v-for="(item, index) in housePics" :key="index">
        <van-swipe-item>
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active }">
        <div class="indicator">
          <template v-for="(value, key) in res" :key="key">
            <span class="item" :class="{ active: getActive(active, key) }">
              <span>{{ key }}</span>
              <span v-if="getActive(active, key)">
                {{ getActive(active, key) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
  .swipe {
    img {
      height: 250px;
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);
      display: flex;

      .item {
        margin: 0 3px;

        &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
</style>
