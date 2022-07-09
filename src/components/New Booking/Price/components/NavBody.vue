<template>
  <div>
    <b-tabs justified>
    <div class="topnav">

    <a class="disable"><b>Routes</b></a>
    <a class="disable"><b>Other Details</b></a>
    <a class="active"><b>Price</b></a>
   
  </div>
  </b-tabs>


  </div>
</template>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: white;
  align-self: center;

}

.topnav a{
  width: 33.3%;
  float: left;
  font-family: Arial;
  color: black;
  text-align: center;
  padding: 10px;
  text-decoration:none;
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

</style>