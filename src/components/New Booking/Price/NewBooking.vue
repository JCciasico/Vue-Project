<template>
  <div class="newbook">
    <NavbarTop/>
    <BookTitle/>
    <NewModal/>
  </div>
</template>

<script>
import BookTitle from './components/BookTitle.vue'
import NavbarTop from '../../Navbar/NavbarTop.vue';
import NewModal from './components/NewModal.vue'

export default {
  name: 'App', 

  components: {
    BookTitle,
    NavbarTop,
    NewModal
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
