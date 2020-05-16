<template>
    <div id="big-box">
        <div>
            <p id="title-text">EXPLORE</p>
        </div>
        <div>
            <p id="subtext">This is where the information starts. There are three parts to this website, 'The Ocean Floor', 'Water', and 'Sea Animals'.
                Pick the path for what you want to learn.
            </p>
        </div>
        <div>
            <md-card md-with-hover>
                <md-ripple>
                    <md-card-header>
                    <div class="md-title">Card with hover effect</div>
                    <div class="md-subhead">It also have a ripple</div>
                    </md-card-header>

                    <md-card-content>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.
                    </md-card-content>

                    <md-card-actions>
                    <md-button>Action</md-button>
                    <md-button>Action</md-button>
                    </md-card-actions>
                </md-ripple>
            </md-card>
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
.md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
}
#title-text {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 10px;
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
