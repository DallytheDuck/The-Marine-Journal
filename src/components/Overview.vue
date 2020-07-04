/* eslint-disable max-len */
<template>
    <div id="bigbox">
        <div>
            <p id="smalltitle">What You can Find</p>
        </div>
        <div class="md-layout md-gutter md-alignment-center">
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <div class="section">
                    <img class="vector" src="../assets/seafloor-vector.png" alt="Seafloor Vector by WIX">
                    <div>
                        <p class="subtitles">THE OCEAN FLOOR</p>
                    </div>
                    <div>
                        <p class="description">The bottom of the sea ... is it flat? Lumpy? Does it have hills?
                            In this section, students can learn about oceanography, such as plate tectonics,
                            plate boundaries, features of the deep ocean floor, and continental margins.</p>
                    </div>
                </div>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <div class="section">
                    <img class="vector" src="../assets/anchor-vector.png" alt="Anchor Vector by WIX">
                    <div>
                        <p class="subtitles">WATER</p>
                    </div>
                    <div>
                    <p class="description">This is your item description. Use this space to add a description of the services,
                        products, team members or any other items you want to highlight on your site. Have a lot to say?
                            Easily turn any item into a full page by clicking ‘Create a page from this item’ in the edit panel.</p>
                    </div>
                </div>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100">
                <div class="section">
                    <img class="vector" src="../assets/whale-vector.png" alt="Whale Vector by WIX">
                    <div>
                        <p class="subtitles">OCEAN ANIMALS</p>
                    </div>
                    <div>
                        <p class="description">This is your item description. Use this space to add a description of the services, 
                            products, team members or any other items you want to highlight on your site. Have a lot to say? 
                            Easily turn any item into a full page by clicking ‘Create a page from this item’ in the edit panel.</p>
                    </div>
                </div>
            </div>
    </div>       
        <div>
            <button id="explorebutton">Explore</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Overview',
  components: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.subtitles {
    font-size: 20px;
    margin-top: 0px;
}
.vector {
    width: 70px;
    height: 70px;
    margin-bottom: 20px;
}
.md-layout-item {
    width: 20vw;
    margin-left: 5vw;
    margin-right: 5vw;
}
.md-layout {
    width: 100vw;
}
#bigbox {
    background-color: rgb( 245, 247, 250);
}
#smalltitle {
    padding-top:70px;
    font-size: 20px;
    margin-bottom: 80px;
}
#explorebutton {
    border-color: #2c3e50;
    border-width: 1px;
    border-style: solid;
    font-size: 18px;
    color: #2c3e50;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    background-color: rgb( 245, 247, 250);
    padding: 15px, 13px, 15px, 13px;
    margin-bottom: 70px;
    margin-top: 70px;
}
.description {
    line-height: 30px;
}
</style>