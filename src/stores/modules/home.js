import { defineStore } from 'pinia'
import { getHotSuggests, getCategories, getHouseList } from '@/service'

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    curPage: 1
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getCategories()
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHouseList(this.curPage)
      this.houseList.push(...res.data)
      this.curPage++
    }
  }
})

export default useHomeStore
