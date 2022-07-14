<template>
  <div class="routes">
    <!-- ICARGO SECTION -->
    <nav>
      <NavbarTop />
    </nav>

    <!-- NEW BOOKING SECTION -->
    <div class="container-fluid title">
      <h3>New Booking</h3>
    </div>

    <!-- NAVIGATION SECTION FOR - ROUTE TAB - OTHER DETAILS - PRICE -->
    <div class="routetab">
      <b-tabs justified>
        <div class="topnav">
          <a class="active"><b id="top-nav" style="color:white">Routes</b></a>
          <a class="disable"><b id="top-nav">Other Details</b></a>
          <a class="disable"><b id="top-nav">Price</b></a>
        </div>
      </b-tabs>
    </div>
    <div>
      <RoutePanel />
    </div>

  </div>
</template>





<script>
import RoutePanel from './RoutePanel.vue';
import NavbarTop from '../../Navbar/NavbarTop.vue';
  export default {
    name: "ICARGO-HEADER",
    components: { RoutePanel,NavbarTop }
}
</script>





<style scoped>
/* ICARGO SECTION STYLE */
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Poppins:ital,wght@0,600;1,400&display=swap');

.navbartop{
  padding: 1rem;
}

#icargo{
  color: #003060;
  font-family: 'Poppins','sans-serif';
  font-size: 2rem;
}

#pacific{
  color: #FBCD10;
  font-family: 'Poppins','sans-serif';
  font-size: 2rem;
}

#user{
  font-family: 'Poppins','sans-serif';
  font-size: 1.1rem;
}

.fa-circle-user {
  font-size: 2em;
}

@media(max-width:500px){
  #icargo{
    font-size: 1.2rem;
  }
  #pacific{
    font-size: 1.2rem;
  }
  #user{
    display: none;
  }
  .title{
    width: 100%;
  }
  .routetab{
    width: 100%;
  }
}

/* NEW BOOKING SECTION STYLE*/
.title{
    background-color: #003060;
    padding: 1rem;
    color: white;
    padding-left: 3rem;
}
.topnav {
  overflow: hidden;
  background-color: white;
  align-self: center;

}

.topnav a {
  width: 33.3%;
  float: left;
  font-family: Arial;
  color: black;
  text-align: center;
  padding: 10px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a.active {
  border: 1px solid grey;
  color: solid white;
  background-color: #1267bd;
}

.topnav a.disable {
  border: 1px solid grey;
  color: solid white;
}
.routes{
  background-color: white;
  height: 100%;
}
@media(max-width:400px){
    #top-nav{
      font-size: 0.8rem;
    }
}
@media(max-width:300px){
    #top-nav{
      font-size: 0.5rem;
    }
}


/* NEW BOOKING SECTION STYLE*/
</style>
