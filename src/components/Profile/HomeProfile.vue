<template>
  <div class="sample" id="app">
    <header>
      <NavbarTop/>
      <TitleHeader/>
    </header>
    <div class="body-content">
      <div class="container">
        <div class="row square-box">
          <div class="col-md-6 text-center profile-icon">
            <PicUser/>
          </div>
          <div class="col-md-6  custom-edit">
            <UpdateUserComp/>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import PicUser from './PicUser.vue';
import UpdateUserComp from './UpdateUserComp.vue';
import TitleHeader from './TitleHeader.vue';
import NavbarTop from '../Navbar/NavbarTop.vue';

export default {
  name: 'App',

  components: {
    PicUser,
    UpdateUserComp,
    TitleHeader,
    NavbarTop
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.body-content{
    padding-top: 3rem;
    padding-bottom: 3rem;
    background: linear-gradient(to right, white, yellow);
}
.sample{
  height: 100vh;
  background: linear-gradient(to right, white, yellow);
}
.square-box{
    background-color: white;
    padding: 1rem;
    margin: auto;
    border-radius: 25px;
    box-shadow: 0px 3px 0px 1px #747d8c;
}
.profile-icon{
    margin:auto;
    padding-top: 5em;
    padding-bottom: 5em;
}
.custom-edit{
    margin: auto;
}
</style>