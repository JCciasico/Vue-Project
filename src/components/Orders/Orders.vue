<template>
  <div class="order-body">
    <NavbarTop/>
    <TitleHeader/>
    <OrderTabs/>
  </div>
</template>

<script>
import NavbarTop from '../components/Navbar/NavbarTop.vue';
import TitleHeader from '../components/Orders/components/TitleHeader.vue';
import OrderTabs from './components/OrderTabs.vue';

export default {
  name: 'App',

  components: {
    NavbarTop,
    TitleHeader,
    OrderTabs,
},

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.order-body{
  height: 100%;
  background-color: white;
}
</style>