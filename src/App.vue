<template>
    <div id="app" class="router-view">
      <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',

  components: {

  },

  data: () => ({
    //
  }),
  
};
</script>


<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.router-view{
  height: 100vh;
  background-color: white;
}
</style>
