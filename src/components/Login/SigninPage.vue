
<template>
  <div class="container-fluid pt-5 p-1 background">
      <form>
        <h1 class="text-dark text-center">Sign in to <span class="text">iCargo</span><span class="text-warning"> Pacific</span></h1>
        <label class="text-left text-dark" >Email </label>
        <!--Email input field-->
        <v-text-field id="email" v-model="email" class="field d-block mx-auto" :rules="[rules.required, rules.email]" name="email"
          background-color="#eef5fd" rounded solo filled></v-text-field>

        <label class="text-left text-dark">Password </label>
        <!--Password input field-->
        <v-text-field id="password" v-model="password" name="password" class="field d-block mx-auto"
          background-color="#eef5fd" rounded solo filled :rules="[rules.required]"
          :type="show ?'text': 'password'" :append-icon="show ?'mdi-eye':'mdi-eye-off'"   
          @click:append="show=!show"></v-text-field>
        
        <h5 class="text-right p-0 m-0 text-dark font-weight-normal"><a href="#" class="text">Forgot password?ㅤㅤ</a></h5>
        <br>
        <div class="text-center">
              <a to=" " id ="buttons" class="btn btn-light btn-lg shadow text-muted">ㅤBackㅤ</a>
              <a href="/routes" id="buttons" class="btn btn-warning btn-lg shadow text-light">ㅤSign inㅤ</a>
        </div>
        <h5 class="m-4 text-dark">Don’t have an account yet?<a class="font-weight-normal text" href="/signup"> Sign up now.</a></h5>
      </form>
  </div>
</template>

<script>
export default {
  name: 'SigninPage',
  data () {
      return {
        show: false,
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
  }

</script>

<style scoped>


.field{
  width: 600px;
  margin: auto;
}

.text{
  color: #3eb3f4;
}


div.background{
  background: linear-gradient(to bottom right, #280eb8, #3352db, #4c9cca, rgb(79, 135, 187));
  padding:0;
  margin: 0;
  height: 100vh;
}

/*Forgot password?*/
h5.text-right{
  text-align:right;
  margin-right: 15%;
}
/*Sign up*/
h5.p-4{
  margin-left: 20px;
  margin-top: 20px;
}

h1 {
  font-weight:bold;
  padding-bottom: 40px;

}

h5 {
  margin-top: 20px;
  margin-bottom: 10px;
  text-decoration: none;
  font-weight: normal;
}

#buttons {
  margin: 10px 15px;
  padding: 6px 6px;
  border-radius: 18px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4em;
}

a {
  margin: 0px auto;
  text-decoration: none;
}

a:hover{
  color: #ffc107;
}

form{
  font-family: Roboto;
  max-width: 760px;
  margin: 0px auto;
  margin-bottom: 100px;
  background: white;
  text-align: left;
  padding: 40px 40px 10px 40px;
  border-radius: 50px;
}

label{
  color: #aaa;
  display: inline-block;
  margin: 5px 0px 5px 50px;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: normal;
}

/*responsiveness*/
@media(max-width:600px){
  #buttons{
    font-size: 1.3rem;
    margin: 20px 10px;
  }
  h5.p-4{
    margin-top: 15px;
  }
  label{
    margin: 5px 0px 5px 20px;
  }
}

@media(max-width:375px){
  #buttons{
    margin: 10px 10px;
    font-size:1.1rem;
    border-radius: 15px;
  }
  h5{
    font-size: 1.1rem;
  }
}
@media(max-width:320px){
  #buttons{
    margin: 10px 5px;
    font-size:1rem;
    border-radius: 15px;
  }
  h5.p-4{
    text-align: center;
  }
}
@media(max-width:280px){
  #buttons{
    margin: 10px 1px;
    font-size:1rem;
    border-radius: 15px;
  }
}
</style>