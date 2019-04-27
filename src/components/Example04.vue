<template>
  <div>
    <h1>mapState 접근 방법 02</h1>
    {{ count }} + {{ number }} = {{ sum }}
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  export default {
    data () {
      return {
        number: 3
      }
    },
    computed: {
      sum () {
        return this.count + this.number
      },
      ...mapState([
        'count'
      ])
    }
  }
</script>
