<template>
  <div>
    <h1>mapMutations</h1>
    <button @click="increment">더하기</button>
    {{ multiply }}
  </div>
</template>
<script>
  import store from  "../store";
  export default {
    methods: {
      increment () {
        store.commit("INCREMENT", 2)
      }
    }
  }
</script>
