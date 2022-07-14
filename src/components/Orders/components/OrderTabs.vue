<template>
  <div>
    <div>
      <b-tabs justified>
        <div class="topnav">
          <a class="disable"><b>To ship</b></a>
          <a class="active"><b style="color:white">Other Details</b></a>
          <a class="disable"><b>Price</b></a>
        </div>
      </b-tabs>
    </div>
  </div>
</template>

<script>
// import CompleteOrders from './CompleteOrders.vue';
// import OngoingOrder from './OngoingOrder.vue';
// import CancelledOrders from './CancelledOrders.vue';
// import ToShipOrder from './ToShipOrder.vue';

// export default {
//     name: "OrderTabs",
//     data() {
//         return {};
//     },
//     components: {CompleteOrders, OngoingOrder, CancelledOrders, ToShipOrder }
// }
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: white;
  align-self: center;
  margin-top: -8px;
}

.topnav a {
  width: 25%;
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

@media (max-width:700px) {
  .topnav {
    width: 20rem;
  }

  .topnav a {
    width: 20rem;
  }
}
</style>
