<template>
  <div class="newbook">
    <NavbarTop/>
    <BookTitle/>
  </div>
</template>

<script>
import BookTitle from './components/BookTitle.vue'
import NavbarTop from '../../Navbar/NavbarTop.vue';

export default {
  name: 'App', 

  components: {
    BookTitle,
    NavbarTop
},

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.newbook{
  height: 100vh;
  background-color: white;
}
</style>
