<template>
  <div>
    <br>
    <GmapMap :center='center' :zoom='12' style='width:100%;  height: 270px;'>
      <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center = m.position" />
    </GmapMap>

    <!---CONTENT-->
    <b-container class="Map Layer">
      <b-row>
        <div class="container-fluid Details">
          <div class="row">
            <div class="col-5 text-left" style="color: white; height: 0px;">
              <span style="color:white ; font-weight:bold; margin-left: 40ch;">Sender:</span>
            </div>
            <div class="col-6 text-left">
              <span style="color:white; margin-left: 0ch;">Emelio Marasigan W. Araullones</span>
            </div>

            <div class="row">
              <div class="col-5 text-left" style="color: white; height: 0px;">
                <span style="color:white ; font-weight:bold; margin-left: 40ch;">Recipient:</span>
              </div>
              <div class="col-6 text-left">
                <span style="color:white; margin-left: 0ch;">Loida Anne Alicia Deline Q. Esteban</span> <br> <br>
                <i class="fa-solid fa-box box" style="color:#e7ba09; margin-left:-26ch;"></i>
                <span style="color:white; margin-left: -16ch;"> Port Batangas, Batangas Port Access Road, Calatagan,
                  Batangas
                </span>
                <br><br>
              </div>



              <div class="row">
                <div class="col-6 text-left">
                  <div class="container-fluid vertical-line" style="margin-left: 35ch;"></div>
                </div>
              </div>

              <div class="row">
                <div class="container-fluid Driver-Details">
                  <h6>Your Driver</h6>
                  <i class="fa-regular fa-circle-user user-icon" style="color: #0D7CFF; margin-left: 2ch;"></i>

                  <span id="driver-name" style="margin-left:13ch; font-weight: bold;">Bartholomew D. Sales</span>
                  <i class="fa-solid fa-square-phone phone-icon" style="color:#e7ba09; margin-left: 4ch"></i>
                  <br>
                  <span id="logistic-company" style="margin-left:13ch;">&nbsp;&nbsp;&nbsp;AllGoods Logistic Co.</span>
                  <br>
                </div>

                <div class="row">
                  <!--div class="col-6 text-left">
                 <br>
                <i class="fa-solid fa-box boxa" style="color:white; margin-left:34ch;"></i>
                <span style="color:white; margin-left:44ch;"> Port Batangas, Batangas Port Access Road </span>
              </div-->

                  <div class="col-6 text-left">
                    <br>
                    <i class="fa-solid fa-box boxa" style="color:white; margin-left:34ch;"></i>
                  </div>
                  <div class="row">
                    <div class="col-12 text-left">
                      <span style="color:white;margin-left: 44ch;">Port Batangas, Batangas Port Access Road, Calatagan,
                        Batangas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      currentPlace: null,
      markers: [],
      places: [],
    }
  },
  mounted() {
    this.geolocate();
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
  },
};

</script>

<style scoped>
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

.angle-left {
  color: gray;
  width: 2.1rem;
  height: 2.1rem;
}

.Details {
  background-color: #003060;
  padding: 1rem;
  color: white;
  padding-left: 3rem;
}

.Driver-Details {
  background-color: white;
  padding: 1rem;
  width: 33%;
  color: black;
  padding-left: 3 rem;
  border-radius: 20px;
  background-color: white;
  outline: none;
  transition: .3s;
  float: left;
  align-items: center;

}

.user-icon {
  position: absolute;
  width: 3rem;
  height: 3rem;
}

.phone-icon {
  position: absolute;
  width: 2.875rem;
  height: 2.875rem;
}

.box {
  position: absolute;
  width: 1.875rem;
  height: 1.875rem;
}

.boxa {
  position: absolute;
  width: 1.875rem;
  height: 1.875rem;
}

.vertical-line {
  position: absolute;
  background-color: white;
  padding: .000001rem;
  width: .400%;
  height: 7rem;
}
</style>
