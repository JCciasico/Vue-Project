<template>
  <div>
    <b-button @click="layer.show1 = true" id=but1 style="margin-left:50ch;">See Details </b-button>

    <popup-layer :visible.sync="layer.show1" @onOpen="open" @onClose="close">

      <div>
         <nav class="navbar navbar-expand-lg navbar-light menu">
          <div class="container-fluid OrderNumber">
            <b-button @click="layer.show1 = false" id=but2>Back</b-button>
            <h3 style="align-items:center;">Order #133443383590</h3>
            <button variant="light"><span class="fa fa-circle-info circle-info"></span></button>
          </div>
        </nav>
        <MapLayer />
      </div>
    </popup-layer>
  </div>
</template>

<script>
import MapLayer from './MapLayer.vue'
export default {
  name: "ModalOngoing",
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

<style scope>
#but1 {
  background-color: yellow;
  color: black;
  font-family: 'Poppins', 'sans-serif';
  font-size: 1em;
  padding: .5em;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 4rem;
}

#but2 {
  background-color: yellow;
  color: black;
  font-family: 'Poppins', 'sans-serif';
  font-size: 1em;
  border-radius: 4rem;
}

.OrderNumber {
  background-color: white;
  color: black;
  float: center;
}

.circle-info {
  color: #e7ba09;
  width: 2rem;
  height: 2rem;
}
</style>
