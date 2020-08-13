<template>
    <div id="big-box" class="md-layout md-gutter">
        <div class="md-layout-item">
            <p class="information-title"><Label>PLATE TECTONICS</Label></p>
                <p class="information-subtext">The Plates</p>
                    <p class="information-text">Plate tectonics is an idea used to describe the structure 
                        of the Earth’s surface. The Earth’s rigid surface, including the crust and some of 
                        the upper mantle, is broken into plates that move and interact with each other. 
                        These are plates, also called the tectonic plates. They are floating on top of the 
                        mantle, and are often compared to the eggshell. The mantle is plastic but not liquid, 
                        so the plates can move around above the mantle, but do not move fast.</p>
                    <p class="information-text">These are the major plates:</p>
                        <ul>
                            <li>The Australian Plate</li>
                            <li>The Pacific Plate</li>
                            <li>The Indian Plate</li>
                            <li>The Eurasian Plate</li>
                            <li>The North American Plate</li>
                            <li>The Antartic Plate</li>
                            <li>The South American Plate</li>
                            <li>The African Plate</li>
                        </ul>
                    <p class="information-text">These are the minor plates:</p>
                        <ul>
                            <li>The Caribbean Plate</li>
                            <li>The Philippine Sea Plate</li>
                            <li>The Arabian Plate</li>
                            <li>The Juan De Fuca Plate</li>
                            <li>The Cocos Plate</li>
                            <li>The Scotia Plate</li>
                        </ul>
        </div>
        <div class="md-layout-item md-size-15"></div>
    </div>
</template>

<script>

import '../css/styling.css';
export default {
  name: 'PlateTectonics',
  components: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#big-box {
    background-color: #f5f7fa;
    padding-top: 35px;
    padding-bottom: 20px;
}
</style>