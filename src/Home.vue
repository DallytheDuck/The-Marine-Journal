<template>
  <div id="app">
    <Header/>
    <Introduction/>
    <Quotation/>
    <Overview/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Introduction from './components/Introduction.vue';
import Quotation from './components/Quotation.vue';
import Overview from './components/Overview.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'HomePage',
  components: {
    Header,
    Introduction,
    Quotation,
    Overview,
    Contact,
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
