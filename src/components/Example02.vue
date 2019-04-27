<template>
  <div>
    <h1>this.$store.state.count 접근 방법</h1>
    {{ count }}
  </div>
</template>
<script>
  export default {
    name: 'Example02',
    computed: {
      count () {
        return this.$store.state.count;
      }
    }
  }
</script>
