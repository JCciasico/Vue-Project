<template>
<div>
<div class="button" >
  <center>
    <a href="#" class="nextback" >Back </a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#" class="nextplace">Place Order </a>
    </center>
</div>
</div>

</template>

<script>
  export default {
    name: 'NextButton',}
</script>

<style scoped>
a {
  text-decoration: none;
  display: inline-block;
  border-radius: 1rem;
  padding: 3 rem;
  

}

a:hover {
  background-color: #FBCD10;
  color: rgb(254, 254, 254);
}
.nextback {
  background-color: white;
  color: grey;
  font-family: 'Poppins','sans-serif';
  font-size: 1em;
  padding: .5em;
  padding-left:1rem;
  padding-right:1rem;
  box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4)



}
.nextplace{
  background-color: white;
  color: grey;
  font-family: 'Poppins','sans-serif';
  font-size: 1em;
  padding:.5em;
  box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4)
}
.button{
  padding:2.5rem;

}
</style>
