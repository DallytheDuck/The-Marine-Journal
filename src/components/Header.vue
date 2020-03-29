<template>
  <div>
    <div>
      <h3 class='headerLeft'>THE MARINE JOURNAL</h3>
      <h5 class='headerLeft'>The Beginner's Guide to Marine Ecology</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.headerLeft {
  text-align:left;
  padding-left: 5px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
