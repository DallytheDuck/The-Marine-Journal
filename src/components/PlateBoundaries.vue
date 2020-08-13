<template>
    <div id="big-box" class="md-layout md-gutter">
        <div class="md-layout-item">
            <p class="information-title"><Label>PLATE BOUNDARIES</Label></p>
                <p class="information-text">There are 5 types of plate boundaries, three that are
                    convergent, one that is divergent and one that is transform. Convergent 
                    boundaries move towards each other, divergent boundaries pull away from 
                    each other, and transform boundaries slide past each other.
                </p>
                <p class="information-text">The first convergent boundary is ocean versus continent. 
                    The features of this boundary are that there are volcanic mountains on land and 
                    trenches. One example of a convergent boundary is The Andes Mountains.
                </p>
                <p class="information-text">The second convergent boundary is ocean versus ocean. 
                    The features of this boundary are underwater volcanoes, volcanic islands, and 
                    trenches. Some examples are the Marianas Trench, Japan, and the Aleutian Islands.
                </p>
                <p class="information-text">The third convergent boundary is continent versus 
                    continent. The features of the boundary are mountains, cracks or faults, and 
                    severe earthquakes. Some examples are the Himalayas and the Urals.
                </p>
                <p class="information-text">There is only one type of divergent boundaries. These 
                    can cause mid-ocean ridges and seamounts in the ocean, and rift valleys on land. 
                    Some examples are the Mid Atlantic Ridge and East African Rift.
                </p>
                <p class="information-text">There is also only one type of transform boundary. 
                    These can cause earthquakes and faults, such as the San Andreas Fault.
                </p>
                

        </div>
        <div class="md-layout-item md-size-15"></div>
    </div>
</template>

<script>

import '../css/styling.css';
export default {
  name: 'PlateBoundaries',
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