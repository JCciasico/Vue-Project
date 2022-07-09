
<template>
  <div class="container-fluid background ">
    <form class="container">
      <img src="../../assets/shakehands.png" class="mx-auto d-block">
      <h2 class="text-dark text-center"> Congratulations, <span>ABC Hardware</span><br>for being an iCargo Merchant!
      </h2>
      <a href="/" id="startBookingButton" class="text-center mx-auto d-block">Start Booking</a>
    </form>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>
.background {
  height: 100%;
  background: linear-gradient(to bottom left, #f7dd0a, #fdfdf5);
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  font-weight: bold;
  margin: 30px 80px 40px 80px;
  text-align: center;
}

#startBookingButton {
  margin: 24px auto;
  padding: 10px 40px;
  font-weight: bold;
  border-radius: 3px;
  color: white;
  border: none;
  background-color: #003366;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 250px;
}

a,
button {
  margin: 0px auto;
  border-radius: 50px;
  text-decoration: none;
}

form {
  font-family: Roboto;
  background: white;
  padding: 5rem;
  border-radius: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

label {
  color: #aaa;
  display: inline-block;
  margin: 10px 0px;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: bold;
}

input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #f2f2f4;
  border-radius: 50px;
}

span {
  color: #034d97;
}

img {
  width: 500px;
}
</style>