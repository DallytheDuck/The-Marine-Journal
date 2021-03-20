<template>
  <div id="big-box">
    <p class="information-title"><Label>LONGITUDE AND LATITUDE</Label></p>
    <p class="information-text">
      Longitude and latitude is a geographical coordination system which
      specifies a location on the Earth’s surface.
    </p>
    <p class="information-subtext">Latitude</p>
    <p class="information-text">
      Latitude are lines that run west to east and can measure how north or
      south something is. These lines are horizontal.
    </p>
    <p class="information-subtext">Longitude</p>
    <p class="information-text">
      Longitude are lines that run north to south and measure how east or west
      something is. These lines are vertical. The Prime Meridian is the central
      line, which is at 0°. The International Date Line is at 180°.
    </p>
    <img src="../assets/LongandLatChart1.png" class="information-bigimage" />
    <p class="information-text">
      Longitude and latitude are written out as 40°N, 115°E and 60°S, 100°W etc.
      For full coordinates, they are written out as 75° 2’ 3’’ N, 36° 27’ 31’’ E
      etc. Here, 1° is read as 60 minutes. The number with one apostrophe means
      minutes, and the number with two apostrophes means seconds.
    </p>
    <p class="information-text">
      In a graph, latitude is on the x-axis and longitude is on the y-axis. The
      maximum latitude is at the poles, 90°N or S.
    </p>
    <p class="information-subtext">Examples in a Graph</p>
    <p class="information-text">
      This is an example of how to graph simple coordinates using latitude and
      longitude.
    </p>
    <img src="../assets/GraphLongandLat1Web.jpg" class="information-bigimage" />
    <p class="information-text">
      This is a graph of Island X. Let’s try to graph Point A, the docks. Let’s
      start with the x-axis, the latitude, first. The latitude is 10 degrees
      east, which is written as 10° E. Now let’s do the longitude, which is on
      the y-axis. It is 20 degrees north, which is written as 20° N. Writing it
      is similar to writing coordinates on the table. The x-axis comes first,
      then the y-axis, which is separated by a comma. So, let’s take the
      latitude and longitude and plug it into our ‘formula’. The answer to Point
      A is 10° E, 20° N.
    </p>
    <p class="information-text">
      So, according to our steps, these are the answers:
    </p>
    <div id="margin" class="md-layout md-gutter">
      <div class="md-layout-item md-medium-size-33">
        <div class="information-text">Point B - 25° E, 25° N</div>
        <div class="information-text">Point D - 20° E, 15° N</div>
      </div>
      <div class="md-layout-item md-medium-size-33">
        <div class="information-text">Point C - 15° E, 20° N</div>
        <div class="information-text">Point E - 15° E, 10</div>
      </div>
      <div class="md-layout-item md-medium-size-33">
        <div class="information-text"></div>
        <div class="information-text"></div>
      </div>
      <div class="md-layout-item md-medium-size-33">
        <div class="information-text"></div>
        <div class="information-text"></div>
      </div>
    </div>
    <img src="../assets/divider.png" alt="divider" />
    <div id="pdfdownloads" class="md-layout md-gutter">
      <div
        class="md-layout-item md-medium-size-33"
        style="vertical-align: middle"
      >
        <p>Download Notes for this Page</p>

        <a
          v-bind:href="`${publicPath}LongandLat.pdf`"
          download="Longitude and Latitude Notes"
        >
          <img id="download" src="../assets/document.png" />
        </a>
      </div>
      <div
        class="md-layout-item md-medium-size-33"
        style="vertical-align: middle"
      >
        <p>Download the full Marine Journal PDF</p>

        <a
          v-bind:href="`${publicPath}LongandLat.pdf`"
          download="Longitude and Latitude Notes"
        >
          <img id="download" src="../assets/document.png" />
        </a>
      </div>
    </div>
  </div>
</template>
// md-layout -> row
// md-layout-item -> col

<script>
import "../css/styling.css";
export default {
  name: "LongandLat",
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#big-box {
  background-color: rgb(245, 247, 250);
  padding-top: 35px;
  padding-bottom: 20px;
}
.text-middle {
  vertical-align: middle;
}
#download {
  width: 50px;
}
#pdfdownloads {
  margin-top: 1vh;
  margin-bottom: 1vh;
}
#margin {
  margin-bottom: 3vh;
}
</style>