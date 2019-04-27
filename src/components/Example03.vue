<template>
  <div>
    <h1>mapState 접근 방법 01</h1>
    {{ count }} + {{ number }} = {{ sum }}
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name: 'Example02',
    data () {
      return {
        number: 3
      }
    },
    computed: mapState({
      count: state => state.count,
      sum (state) {
        return state.count + this.number
      }
    })
  }
</script>
