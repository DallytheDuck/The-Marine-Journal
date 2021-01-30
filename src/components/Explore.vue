<template>
  <div id="big-box">
    <div>
      <p id="title-text">EXPLORE</p>
    </div>
    <div>
      <p id="subtext">
        There are three parts to this website, 'The Ocean Floor', 'Water', 'Sea
        Animals', and 'Human Impacts'. Pick the path for what you want to learn.
      </p>
    </div>
    <div class="md-layout md-gutter md-alignment-center">
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        v-on:click="goSeafloor"
      >
        <md-card md-with-hover id="oceanography">
          <md-ripple>
            <md-card-header>
              <div class="md-title">The Sea Floor</div>
              <div class="md-subhead">Oceanography</div>
            </md-card-header>
          </md-ripple>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        v-on:click="goWater"
      >
        <md-card md-with-hover id="seawater">
          <md-ripple>
            <md-card-header>
              <div class="md-title">Water</div>
              <div class="md-subhead">The Sea Water</div>
            </md-card-header>
          </md-ripple>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        v-on:click="goAnimals"
      >
        <md-card md-with-hover id="seaanimals">
          <md-ripple>
            <md-card-header>
              <div class="md-title">Sea Animals</div>
              <div class="md-subhead">Animals that Live in the Sea</div>
            </md-card-header>
          </md-ripple>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <md-card md-with-hover id="humanimpacts">
          <md-ripple>
            <md-card-header>
              <div class="md-title">Human Impacts</div>
              <div class="md-subhead">
                Negative Impacts of Humans to the Ocean
              </div>
            </md-card-header>
          </md-ripple>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explore",
  components: {},
  methods: {
    goSeafloor() {
      window.location = "/seafloor";
    },
    goWater() {
      window.location = "/water";
    },
    goAnimals() {
      window.location = "/animals";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#oceanography {
  background-image: url("../assets/sea-floor.jpg");
}
#seawater {
  background-image: url("../assets/sea-water.jpg");
}
#seaanimals {
  background-image: url("../assets/sea-whale.jpg");
}
.md-card {
  width: 320px;
  height: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: top;
}
.md-layout-item {
  padding: 0px;
}
.md-title {
  font-size: 35px;
  vertical-align: bottom;
}
.md-subhead {
  font-size: 20px;
  margin-top: 10px;
}
#title-text {
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 0px;
}
#subtext {
  font-size: 24px;
}
#big-box {
  background-color: rgb(245, 247, 250);
  padding-top: 35px;
  padding-bottom: 20px;
}
</style>
