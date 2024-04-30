<script setup>
  import { onMounted, ref } from 'vue'
  import useDetailStore from '@/stores/modules/detail'
  import DetailSection from '@/components/detail-section/detail-section.vue'

  const detailStore = useDetailStore()
  const position = detailStore.houseDetail.mainPart.dynamicModule.positionModule

  const mapRef = ref()
  onMounted(() => {
    const map = new BMapGL.Map(mapRef.value) // 创建地图实例
    const point = new BMapGL.Point(position.longitude, position.latitude) // 创建点坐标
    map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
    const marker = new BMapGL.Marker(point)
    map.addOverlay(marker)
  })
</script>

<template>
  <div class="map">
    <detail-section title="位置周边" more="查看更多周边信息">
      <div class="container" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
  .container {
    height: 250px;
  }
</style>
