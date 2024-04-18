import { throttle } from 'underscore'
import { onMounted, onUnmounted, ref } from 'vue'

export default function useScroll() {
  const isBottom = ref(false)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  const clientHeight = ref(0)

  const onScroll = throttle(() => {
    scrollTop.value = document.documentElement.scrollTop // 距顶部
    scrollHeight.value = document.documentElement.scrollHeight // 滚动条总高度
    clientHeight.value = document.documentElement.clientHeight // 可视区高度
    if (scrollTop.value + clientHeight.value >= scrollHeight.value)
      isBottom.value = true
  }, 100)

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return { isBottom, scrollTop, scrollHeight, clientHeight }
}
