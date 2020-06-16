<template>
    <div id="big-box">
        <div>
            <p id="title-text">WATER</p>
        </div>
        <div>
            <p id="subtext">These are subsections for learning about water.
            </p>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <md-card md-with-hover  id="tides">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Tides</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="Waves">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Waves</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="propertiesofwater">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Properties of Water</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="temperature">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Temperature in the Ocean</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="salinity">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Salinity</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="ph">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">The PH Scale</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="thecarboncycle">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">The Carbon Cycle</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="oceanacidificationlab">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Ocean Acidification Lab</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Water',
  components: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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