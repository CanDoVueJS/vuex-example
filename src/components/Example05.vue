<template>
  <div>
    <h1>mapGetters</h1>
    {{ multiply }}
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters([
        'multiply'
      ]),
      ...mapState([
        'count'
      ])
    }
  }
</script>
