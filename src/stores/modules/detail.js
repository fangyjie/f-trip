import { defineStore } from 'pinia'
import { getHouseDetail } from '@/service'

const useDetailStore = defineStore('detail', {
  state: () => ({
    houseDetail: {}
  }),
  actions: {
    async fetchHouseDetailData(id) {
      const res = await getHouseDetail(id)
      this.houseDetail = res.data
    }
  }
})

export default useDetailStore
