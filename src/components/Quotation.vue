<template>
  <div id='outside-box'>
    <div class="quotebox">
      <p id="saying">"The sea, once it casts its spell,
          holds one in its net of wonder forever."</p>
      <p>Jaques Cousteau</p>
    </div>
    <img src="../assets/quote.jpg" alt="Photo by Matt Hardy on Unsplash" id="imagequote">
  </div>
</template>

<script>

export default {
  name: 'Quotation',
  components: {
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#outside-box {
  background-color: white;
}
#saying {
  font-size: 25px;
}
.quotebox {
  background-color: rgb( 245, 247, 250);
  width: 100vh;
  height: 600px;
  float: left;
  margin-left: 20%;
}
#imagequote{
  width: 30vh;
  height: 600px;
  float: left;
}
</style>
