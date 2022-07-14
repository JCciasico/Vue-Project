
<template>
  <div class="container-fluid pt-5 p-1 background">
      <form>
        <div class="d-flex justify-content-center img-responsive">
          <img src="../../assets/shakehands.png" class="center-block d-block mx-auto img-responsive">
        </div>
        <h2 class="text-dark text-center"> Congratulations, <span>ABC Hardware</span> for being an iCargo Merchant!</h2>
        <div class="d-flex justify-content-center">
          <a href="/" id="startBookingButton" class="btn mx-auto" role="button">Start Booking</a>
        </div>
      </form>
  </div>
</template>

<script>
export default {
  
  }

</script>

<style scoped>


div.background{
  height:100vh;
  background: linear-gradient(to bottom left, #f7dd0a,#fdfdf5);
  padding:0;
  margin:0;
}
h2 {
  font-weight:bold;
  margin: 30px 80px 40px 80px;
  text-align: center;
}

a,button {
  margin: 0px auto;
  border-radius: 50px;
  text-decoration: none;
  margin-bottom: 20px;
  padding: 10px 40px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  border:none;
  background-color: #003366;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
a:hover{
  color: #ffc107;
}
form{
  font-family: Roboto;
  max-width: 800px;
  margin: 0px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 25px;
  margin-bottom: 150px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
label{
  color: #aaa;
  display: inline-block;
  margin: 10px 0px;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: bold;
}
input{
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border:none;
  border-bottom: 1px solid #ddd;
  color: #f2f2f4;
  border-radius: 50px;
}
span{
  color: #034d97;
}
@media(max-width:375px){
  h2{
    font-size: 1.2rem;

  }

  img{
    height:auto;
    max-width: 90%;
  }
  form{
    max-width: 350px;
  }
}

@media(max-width:320px){
  h2{
    font-size: 0.8rem; 
  }

  img{
    height:auto;
    max-width: 90%;
  }
  a,button {
    font-size: 0.8rem;
    margin: 0px auto;
    border-radius: 50px;
    text-decoration: none;
    margin-bottom: 20px;
    padding: 8px 30px;
    font-weight: bold;
    border-radius: 3px;
    color: white;
    border:none;
    background-color: #003366;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  form{
    max-width: 310px;
  }
}
@media(max-width:280px){
  h2{
    font-size: 0.6rem;
    
  }
  a,button {
    font-size: 0.6rem;
    margin: 0px auto;
    border-radius: 50px;
    text-decoration: none;
    margin-bottom: 20px;
    padding: 8px 30px;
    font-weight: bold;
    border-radius: 3px;
    color: white;
    border:none;
    background-color: #003366;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  }
  
}



</style>