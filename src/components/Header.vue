<template>
  <div style="postition: fixed, top:0px">
    <img id='logo' src='../assets/whale-logo.png' alt='Logo'/>
    <div class='headerLeft' style='float: left'>
      <h2>THE MARINE JOURNAL</h2>
      <h4>The Beginner's Guide to Marine Ecology</h4>
    </div>
    <div style='float: right' class='menu'>
      <div>
          <md-menu md-direction="bottom-start" md-align-trigger>
            <md-button md-menu-trigger><h2>Home</h2></md-button>
          </md-menu>
          <md-menu md-direction="bottom-start" md-align-trigger>
            <md-button md-menu-trigger><h2>Explore</h2></md-button>

            <md-menu-content>
              <md-menu-item>The Ocean Floor</md-menu-item>
              <md-menu-item>Water</md-menu-item>
              <md-menu-item>Sea Animals</md-menu-item>
            </md-menu-content>
          </md-menu>
          <md-menu md-direction="bottom-start" md-align-trigger>
            <md-button md-menu-trigger><h2>About</h2></md-button>
          </md-menu>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Header',
  components: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.menu {
  margin-right: 30px;
  padding-top: 15px;
}
.md-menu {
  float: left;
}
.md-menu-content-container {
  padding: 10px;
}
.md-button {
  border: none;
  background: none;
  margin:10px
}
.md-menu-item {
  list-style-type: none;
  font-size: 1em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.headerLeft * {
  text-align:left;
  padding-left: 10px;
  margin: 0;
  padding-top: 7px;
}
.md-menu-content {
  background-color: white;
}
#logo {
  width: 90px;
  height: 90px;
  float: left;
}
ul {
  padding-left: -40px;
  margin-left: -40px;
}
</style>
