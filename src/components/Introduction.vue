<template>
  <div class = "section">
      <div class="white-box">
          <div class="caps-words">
              <p>THE</p><p>MARINE</p><p>JOURNAL</p>
              <div class="not-caps-words">
                <p>The Beginner's Guide to Marine Ecology</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Introduction',
  components: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.section {
    background-image: url("../assets/homepage.jpg");
    width: 99vw;
    height: 91vh;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 5%;
}
.white-box {
    margin-left: 100px;
    width: 40%;
    height: 80%;
    background:rgba(255, 255, 255, 1);
    opacity: 0.5;
    vertical-align: center;
}
.caps-words{
    padding-top:12vh;
    font-size: 90px;
    text-align: center;
    color: black;
    line-height: 100px;
}
.not-caps-words {
    font-size: 30px;
    color: black;
}
p {
    margin:0px;
    opacity: 1;
}

</style>
