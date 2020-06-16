<template>
    <div id="big-box">
        <div>
            <p id="title-text">THE SEA FLOOR</p>
        </div>
        <div>
            <p id="subtext">These are subsections for learning about the sea floor.
            </p>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <md-card md-with-hover  id="longandlat">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Longitude and Latitude</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="platetectonics">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Plate Tectonics</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="plateboundaries">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Plate Boundaries</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="seafloorfeatures">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Sea Floor Features</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="shoeboxbathymetry">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Shoebox Bathymetry Experiment</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="seafloormapping">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Types of Seafloor Mapping</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Explore',
  components: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#longandlat {
    background-image: url("../assets/longandlat.jpg");
    opacity: 0.8;
}
#platetectonics {
    background-image: url("../assets/plate-tectonics.png");
    opacity: 0.8;
}
#plateboundaries {
    background-image: url("../assets/plate-boundaries.png");
    opacity: 0.8;
}
#seafloorfeatures {
    background-image: url("../assets/seafloor-features.png");
    opacity: 0.8;
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
    background-color: rgb( 245, 247, 250);
    padding-top: 35px;
    padding-bottom: 20px;
}
</style>