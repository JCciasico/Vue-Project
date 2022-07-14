<template>
  <div class="Modal">
    <b-button id=show-btn @click="showModal">See Details</b-button>

    <b-modal ref="my-modal" title="Order Number">

      <!--DATE AND TIME-->
      <div class="d-block">
        <div class="container-fluid datetime">
          <h3 style="color:white;font-weight: bolder;">March 25, 2022 3:00PM</h3>
        </div>

        <!--ADDRESS-->
        <div class="container-fluid pick-upadd" style="margin-left:2ch;">
          <br>
          <i class="far fa-circle" style="color:#FBCD10; text-align:left;"></i>
          &nbsp;&nbsp;<span id="usera">Makati City</span>
          <p>
            House No., Street, City, Country, Postal Code
            <br>
            Sender's Name | Sender's Contact Number
          </p>
        </div>
        <div class="container-fluid drop-offadd" style="margin-left:2ch;">
          <i class="far fa-circle" style="color:#FBCD10; text-align:left;"></i>
          &nbsp;&nbsp;<span id="usera">Valenzuela City</span>
          <br>
          House No., Street, City, Country, Postal Code
          <br>
          Recipient's Name | Recipient's Contact Number
        </div>

        <!--PACKAGE DETAILS-->
        <div class="container-fluid package-details" style="margin-left:5ch;">
          <br>
          <div class="row">
            <div class="col-1 text-left" style="color: black; height: 4px;">
              <br><img src="" width="70" height="50" alt="PACKAGE PIC">
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left" style="color: black; height: 22px;">
              <span style="color:black ; margin-left: 12ch;">Dimension</span>
            </div>
            <div class="col-6 text-center">
              <span style="color:black;">Cargo type</span>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left" style="color: black; height: 22px;">
              <span style="color:black ; font-weight:bold; margin-left: 12ch;">34x54x22cm</span>
            </div>
            <div class="col-6 text-center">
              <span style="color:black; font-weight:bold;">Crate</span> <br><br>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left" style="color: black; height: 22px;">
              <span style="color:black ;margin-left: 12ch;">Weight</span>
            </div>
            <div class="col-6 text-center">
              <span style="color:black;"> Cargo Service</span>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left" style="color: black; height: 22px;">
              <span style="color:black ; font-weight:bold; margin-left: 12ch;">14kg </span>
            </div>
            <div class="col-6 text-center">
              <span style="color:black; font-weight:bold;"> Truck </span> <br><br>
            </div>
          </div>
        </div>

        <!--DISTANCE-->
        <div class="container-fluid distance">
          <div class="row">
            <div class="col-6 text-left" style="color: black; height: 25px;">
              <span style="color:black ; font-weight:bold; margin-left: 1ch;">Distance </span>
            </div>
            <div class="col-6 text-center">
              <span style="color:black; font-weight:bold;"> 703km </span>
            </div>
          </div>
        </div>

        <!--REMARKS-->
        <div class="container-fluid Remarks" style="margin-left: 1ch;">
          <p>
            <span style="color:black ; font-weight:bold;">Remarks</span>
            <br>
            Fragile items. Please handle with care.
          </p>
        </div>

        <!--PRICE & MOP-->
        <div class="container-fluid Price-MOP">
          <div class="row">
            <div class="col-6 text-left" style="color: black;">
              <span style="color:black ; font-weight:bold; margin-left: 1ch;">Price</span>
            </div>
            <div class="col-6 text-center">
              <span style="color:#003060; font-weight:bold;"> P504 </span>
            </div>
          </div>
          <div class="row">
            <div class="col-6 text-left" style="color: black;">
              <span style="color:black ; font-weight:bold; margin-left: 1ch;">Mode of Payment </span>
            </div>
            <div class="col-6 text-center">
              <span style="color:#003060; font-weight:bold;"> Cash on Delivery </span>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>
<style scoped>
.datetime {
  background-color: #003060;
  width: 28rem;
  align-items: flex-start;
  height: 3em;
}

#usera {
  font-family: 'Poppins', 'sans-serif';
  font-size: 1rem;
  color: rgb(49, 48, 48);
  text-align: left;
}

.Price-MOP {
  background-color: lightgray;
}

.distance {
  background-color: lightgray;
}

#show-btn {
  background-color: #fbcd10;
  color: black;
  font-family: 'Poppins', 'sans-serif';
  font-size: 1em;
  padding: .5em;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 4rem;
  margin-left: 50ch;
}

@media (max-width:700px) {
  .datetime {
    width: 22rem;
  }

  #show-btn {
    margin-left: 16ch;
  }
}
</style>
