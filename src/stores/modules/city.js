import { defineStore } from 'pinia'
import { getCityAll } from '@/service'

const useCityStore = defineStore('city', {
  state: () => ({
    curCity: { cityName: '西安' },
    allCities: {}
  }),
  actions: {
    async fetchAllCityData() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

export default useCityStore
