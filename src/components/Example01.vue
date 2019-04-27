<template>
  <div>
    <h1>store.state.count 접근 방법</h1>
    {{ count }}
  </div>
</template>
<script>
  import store from '../store/index';
  export default {
    name: 'Example01',
    computed: {
      count () {
        return store.state.count;
      }
    }
  }
</script>
