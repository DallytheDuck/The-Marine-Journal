<template>

  <div class='header'>
    <img id='logo' src='../assets/whale-logo.png' alt='Logo'/>
    <div class='headerLeft' style='float: left'>
      <h2 class="remove-margin" style="margin-top: 12px">THE MARINE JOURNAL</h2>
      <h4 class="remove-margin">The Beginner's Guide to Marine Ecology</h4>
    </div>
    <div style='float: right' class='menu'>
      <div>
          <md-menu md-direction="bottom-start" md-align-trigger>
            <md-button md-menu-trigger v-on:click="goHome"><h2>Home</h2></md-button>
          </md-menu>
          <md-menu md-direction="bottom-start" md-align-trigger>
            <md-button md-menu-trigger v-on:click="goExplore"><h2>Explore</h2></md-button>

            <md-menu-content>
              <md-menu-item v-on:click="goSeafloor">The Ocean Floor</md-menu-item>
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
  methods:{
    goHome() {
      window.location = '/'
    },
    goExplore() {
      window.location = '/explore'
    },
    goSeafloor() {
      window.location = '/seafloor'
    },
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  padding-top: 10px;
  padding-left: 10px;
  height: 90px;
}

.remove-margin{
  margin: 2px;
}

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
.headerLeft {
  text-align:left;
  padding-left: 10px;
  margin: 0;
  padding-top: 2px;
}
.md-menu-content {
  background-color: white;
}
#logo {
  width: 75px;
  height: 75px;
  float: left;
}
ul {
  padding-left: -40px;
  margin-left: -40px;
}
</style>
