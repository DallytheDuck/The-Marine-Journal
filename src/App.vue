<template>
  <div id="app">
    <Header/>
    <Introduction/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';

export default {
  name: 'App',
  components: {
    Header,
    Introduction,
  },
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
