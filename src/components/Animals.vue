<template>
    <div id="big-box">
        <div>
            <p id="title-text">SEA ANIMALS</p>
        </div>
        <div>
            <p id="subtext">These are subsections for learning about sea animals.
            </p>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <md-card md-with-hover  id="planktonnekton">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Plankton and Nekton</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="taxonomy">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Taxonomy</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="marineinvertabrates">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Marine Invertabrates</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="lifezones">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Life Zones</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="fish">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Fish</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="mollusca">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Mollusca</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="mammals">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Sea Mammals</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" >
                <md-card md-with-hover id="diverstiyindex">
                    <md-ripple>
                        <md-card-header>
                        <div class="md-title">Simpson's Diversity Index</div>
                        </md-card-header>
                    </md-ripple>
                </md-card>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Animals',
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
    line-height: 40px;
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