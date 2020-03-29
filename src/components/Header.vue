<template>
  <div>
    <img id='logo' src='../assets/whale-logo.png' alt='Logo'/>
    <div class='headerLeft' style='float: left'>
      <h2>THE MARINE JOURNAL</h2>
      <h4>The Beginner's Guide to Marine Ecology</h4>
    </div>
    <div style='float: right' class='menu'>
      <div>
          <md-menu md-direction="bottom-start" :md-offset-y="36">
              <md-button md-menu-trigger><h4>Home</h4></md-button>
          </md-menu>
          <md-menu md-direction="bottom-start" :md-offset-y="36">
              <md-button md-menu-trigger><h4>Explore</h4></md-button>

              <md-menu-content>
                  <md-menu-item>My Item 1</md-menu-item>
                  <md-menu-item>My Item 2</md-menu-item>
                  <md-menu-item>My Item 3</md-menu-item>
              </md-menu-content>
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
.md-button {
  border: none;
  background: none;
}
.md-menu-item {
  list-style-type: none;
}
.headerLeft * {
  text-align:left;
  padding-left: 10px;
  margin: 0;
  padding-top: 7px;
}
#logo {
  width: 90px;
  height: 90px;
  float: left;
}
</style>
