<template>
  <div>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">


    <b-button @click="layer.show1 = true" id=but1 style="margin-left:50ch;">See Details </b-button>

    <popup-layer :visible.sync="layer.show1" @onOpen="open" @onClose="close">
      <MapLayer />
      <b-button @click="layer.show1 = false" id=but1 style="margin-left:50ch;">Back</b-button>
    </popup-layer>
  </div>
</template>

<script>
import MapLayer from './MapLayer.vue'
export default {
  name: "GoogleMap",
  data() {
    return {
      layer: {
        show1: false,
      }
    };
  },
  methods: {
    open() {
      console.log("GoogleMap");
    },
    /**
     * @param {Boolean} isPopstate：Whether the close shell event comes from the physical return key
     */
  },
  components: { MapLayer }
}
</script>

<style scoped>
#but1 {
  background-color: yellow;
  color: black;
  font-family: 'Poppins','sans-serif';
  font-size: 1em;
  padding: .5em;
  padding-left:1rem;
  padding-right:1rem;
  border-radius:4rem;
}
</style>
