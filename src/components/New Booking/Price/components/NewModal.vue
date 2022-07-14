<template>
  <div id="modal">
   <div><br></div>
   <center>
     <a href="/details" class="button show-btn1">Back</a>&nbsp;&nbsp;
    <b-button id=show-btn @click="showModal">Place Order </b-button>
    </center>
    <b-modal ref="my-modal" title="YOUR ECONOMY PRICE" hide-footer>
      <div class="d-block">
        <!--PRICE & MOP-->
            <h2 style="text-align:center;">Php 665.00</h2>
          <div class="row">
            <div class="col-auto">
              <span style="color:black ;  ">Vehicle type: </span><br>
              <span style="color:black ;  ">Pickup      : </span><br>
              <span style="color:black ; ">Destination :</span><br>
              <span style="color:black ;  ">Distance    : </span><br>
              <span style="color:black ; ">Duration    : </span><br>
              <span style="color:black ;  ">Inclusions  : </span><br>
              <span style="color:black ;  ">Available   : </span>
            </div>
            <div class="col-6">
              <span style="color:grey; "> Whole Vehicle L300 </span><br>
              <span style="color:grey; "> Manila ,Metro Manila </span><br>
              <span style="color:grey;"> Calatagan, Batangas </span><br>
              <span style="color:grey; "> 86 km </span><br>
              <span style="color:grey; "> 4h 45m </span><br>
              <span style="color:grey; "> Driver,fuel,load,/unload,insurance </span><br>
              <span style="color:grey; "> Earliest pickup within an hour.Later pickup times are also available.  </span>
            </div>
            <h6> Your driver must receive your advance approval<br>to reimburse tolls and parking.</h6>
    </div>
    <pre class="text-center"><b-button pill @click="hideModal()" variant="secondary font-weight-bold">    CLOSE    </b-button>  <b-button pill href="/toship" variant="primary font-weight-bold">   BOOK NOW   </b-button></pre>
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
h6{
    color:red;
    text-align:center;
}
#usera {
  font-family: 'Poppins', 'sans-serif';
  font-size: 1rem;
  color: rgb(49, 48, 48);
  text-align: left;
}

#show-btn{
  background-color: #FBCD10;
  color: black;
  font-family: 'Poppins','sans-serif';
  font-size: 1em;
  padding: .5rem;
  padding-left:1rem;
  padding-right:1rem;
  border-radius:4rem;
  box-shadow: 0px 3px 10px 1px gray;
 

}
.show-btn1{
   background-color: #FBCD10;
  color: black;
  font-family: 'Poppins','sans-serif';
  font-size: 1em;
  padding: .5rem;
  padding-left:2rem;
  padding-right:2rem;
  border-radius:4rem;
  border: .5px solid grey;
  text-decoration:none;
  box-shadow: 0px 3px 10px 1px gray;
}
#modal{
  padding-bottom: 50px;
}
</style>