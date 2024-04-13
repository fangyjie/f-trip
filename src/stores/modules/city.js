import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => ({
    name: '西安'
  })
})

export default useCityStore
