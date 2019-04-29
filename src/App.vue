<template>
  <div id="app">
    <example01 />
    <example02 />
    <example03 />
    <example04 />
    <example05 />
  </div>
</template>

<script>
  import Example01 from './components/Example01'
  import Example02 from './components/Example02'
  import Example03 from './components/Example03'
  import Example04 from './components/Example04'
  import Example05 from './components/Example05'
  export default {
  name: 'app',
  components: {
    Example01,
    Example02,
    Example03,
    Example04,
    Example05
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
