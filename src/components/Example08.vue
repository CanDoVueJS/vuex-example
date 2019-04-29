<template>
  <div>
    <h1>mapMutations</h1>
    <button @click="decrement">빼기</button>
  </div>
</template>
<script>
  import { mapMutations } from "vuex"
  export default {
    methods: {
      ...mapMutations([
        "DECREMENT"
      ]),
      decrement () {
        this.DECREMENT({ count: 2 })
      }
    }
  }
</script>
