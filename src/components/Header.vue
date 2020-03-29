<template>
  <div>
    <img id='logo' src='../assets/whale-logo.png' alt='Logo'/>
    <div style='float: left'>
      <h2 class='headerLeft'>THE MARINE JOURNAL</h2>
      <h4 class='headerLeft'>The Beginner's Guide to Marine Ecology</h4>
    </div>
    <div style='float: right'>
      <md-menu md-direction="bottom-start">
        <md-button md-menu-trigger>Bottom Start</md-button>

        <md-menu-content>
          <md-menu-item>My Item 1</md-menu-item>
          <md-menu-item>My Item 2</md-menu-item>
          <md-menu-item>My Item 3</md-menu-item>
        </md-menu-content>
      </md-menu>
      <h4 class="headerLeft2">Home</h4>
      <h4 class="headerLeft2">Explore</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.headerLeft {
  text-align:left;
  padding-left: 10px;
  margin: 0;
  padding-top: 7px;
}

.headerLeft2{
  float: left;
  padding: 5px;
}

#logo {
  width: 90px;
  height: 90px;
  float: left;
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
