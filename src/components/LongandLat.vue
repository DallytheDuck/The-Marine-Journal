<template>
    <div id="big-box" class="md-layout md-gutter">
        <div class="md-layout-item">
            <p class="information-title"><Label>LONGITUDE AND LATITUDE</Label></p>
                <p class="information-subtext">Latitude</p>
                    <p class="information-text">Latitude are lines that run west to east and can measure 
                    how north or south something is. These lines are horizontal.</p>
                <p class="information-subtext">Longitude</p>
                    <p class="information-text">Longitude are lines that run north to south and measure how 
                    east or west something is. These lines are vertical. The Prime Meridian is the central line, 
                    which is at 0°. The International Date Line is at 180°.</p>
                <p class="information-subtext">How Longitude and Latitude are Represented</p>
                    <p class="information-text">Longitude and latitude are written out as 40°N, 115°E, 60°S, 
                    100°W etc. For full coordinates, they are written out as 75° 2’ 3’’ N, 36° 27’ 31’’ E etc. 
                    Here, 1° is read as 60 minutes. The number with one apostrophe means minutes, and the number
                    with two apostrophes means seconds.</p>
                <p class="information-subtext">Graphing Longitude and Latitude</p>
                    <p class="information-text">In a graph, latitude is on the x-axis and longitude is on the 
                    y-axis. The maximum latitude is at the poles, 90°N or S.</p>
        </div>
        <div class="md-layout-item md-size-15"></div>
    </div>
</template>

<script>

import '../css/styling.css';
export default {
  name: 'LongandLat',
  components: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#big-box {
    background-color: rgb( 245, 247, 250);
    padding-top: 35px;
    padding-bottom: 20px;
}
</style>