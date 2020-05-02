<template>
  <div id='outside-box'>
    <div class="quotebox">
      <p id="saying">"The sea, once it casts its spell,
          holds one in its net of wonder forever."</p>
      <p id="person">Jaques Cousteau</p>
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
  margin-top: 10vh;
  align-content: center;
  padding-bottom: 10vh;
  display: inline-block;
}
#saying {
  font-size: 30px;
}
#person {
  font-style: italic;
  font-size: 25px;
}
.quotebox {
  background-color: rgb( 245, 247, 250);
  width: 45vw;
  height: 450px;
  float: left;
  padding-top: 150px;
  padding-right: 20px;
  padding-left: 20px;
}
#imagequote{
  width: 35vw;
  height: 600px;
  float: left;
}
</style>
