<script setup>
  import { ref } from 'vue'

  const props = defineProps({
    names: {
      type: Array,
      default: () => []
    }
  })

  const curItem = ref(props.names[0])
  const emit = defineEmits(['tabItemClick'])
  const controlClick = (item) => {
    curItem.value = item
    emit('tabItemClick', item)
  }
  const tabChange = (item) => {
    curItem.value = item
  }

  defineExpose({
    tabChange
  })
</script>

<template>
  <div class="control top-bar">
    <template v-for="item in names" :key="item">
      <div
        class="item"
        :class="{ active: item === curItem }"
        @click="controlClick(item)"
      >
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
  .control {
    font-size: 14px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    display: flex;

    .item {
      flex: 1;

      &.active span {
        color: var(--primary-color);
        font-weight: 700;
        border-bottom: 3px solid var(--primary-color);
        padding: 8px;
      }
    }
  }
</style>
