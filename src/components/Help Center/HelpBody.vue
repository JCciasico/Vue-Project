<template>
  <div class="help-body">
    <header>
      <NavbarTop/>
      <HelpHeader/>
    </header>
    <div class="body-content">
        <HelpCategories/>
        <div class="FAQ-container">
        <h5 id="FAQ" style="padding-bottom: 15px;padding-top: 50px;">FREQUENTLY ASKED QUESTIONS (FAQ)</h5>
        </div>
        <HelpCenter/>
    </div> 
  </div>
</template>

<script>
import HelpHeader from './HelpHeader.vue';
import HelpCenter from './HelpCenter.vue';
import HelpCategories from './HelpCategories.vue';
import NavbarTop from '../Navbar/NavbarTop.vue';

export default {
  name: 'App',

  components: {
    HelpHeader,
    HelpCenter,
    HelpCategories,
    NavbarTop
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.body-content{
    position: relative;
    background: #dfe4ea;
    min-height: 100%;
}
.help-body{
  background: #dfe4ea;
  height: 100vh;
}
.FAQ-container{
  padding-left: 5em;
  color:#003060;
}
@media(max-width:700px){
  #FAQ{
    text-align: center;
  }
  .FAQ-container{
  padding-left: 0;
  }
}
@media (max-width:500px){
    #FAQ{
        font-size: 1rem;
    }
}
@media (max-width:350px){
    #FAQ{
        font-size: 0.8rem;
    }
}
</style>