<template>
  <div id="app">
    <Header/>
    <PlateBoundaries/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import PlateBoundaries from './components/PlateBoundaries.vue'
import Footer from './components/Footer.vue';

export default {
  name: 'PlateBoundariesPage',
  components: {
    Header,
    PlateBoundaries,
    Footer,
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
}

ul {
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

li {
  padding-left: 10px;
  padding-right: 5px;
}
</style>