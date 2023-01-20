import { defineStore } from "pinia";

export let useCounterStore = defineStore('counter', {
  state() {
    return {
      count: 0
    }
  },

  actions: {
    increase(){
      this.count++;
    },
    decrease(){
      this.count--;
    }
  }
})