import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  // export useCounterStore = ("counter"())

  const list = ref([])

  const fetchApiData = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1/albums')
      list.value = res.data
      console.log('test123', list)
    } catch (error) {
      console.log('沒資料')
    }
  }

  return { count, doubleCount, increment, fetchApiData, list }
})
