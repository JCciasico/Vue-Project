<template>
  <div class="background">
      <form class="custom-form">
        <h1 class="text-dark text-center">Sign in to <span class="text">iCargo</span><span class="text-warning">
            Pacific</span></h1>
        <label class="text-left text-dark">Email </label>
        <v-text-field id="email" v-model="email" class="field d-block mx-auto" :rules="[rules.required, rules.email]"
          name="email" placeholder="Email" rounded solo filled></v-text-field>
        <label class="text-left text-dark">Password </label>

        <v-text-field id="password" name="password" class="field d-block mx-auto" placeholder="Password" rounded solo
          filled :rules="[rules.required]" :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"></v-text-field>

        <h5 class="text-right p-0 m-0 text-dark font-weight-normal"><a href="#" class="text">Forgot password?ㅤㅤ</a></h5>
        <br>
        <div class="text-center">
            <a to=" " class="btn btn-light btn-lg shadow text-muted">ㅤBackㅤ</a>
            <a href="/routes" class="btn btn-warning btn-lg shadow text-light">ㅤSign inㅤ</a>
        </div>
        <h5 class="p-4 text-dark">Don’t have an account yet?<a class="font-weight-normal text" href="/signup"> Sign up
            now.</a></h5>
      </form>
  </div>
</template>

<script>
export default {
  name: 'SigninPage',
  data() {
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

      methods: {
        goToHome() {
          this.$router.push('/');
        }
      }
    }
  },
}

</script>

<style scoped>
.field {
  width: 600px;
  margin: auto;
}

.text {
  color: #3eb3f4;
}

.background {
  background: linear-gradient(to bottom right, #280eb8, #3352db, #4c9cca, rgb(79, 135, 187));
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

h1 {
  font-weight: bold;
  padding-bottom: 40px;

}
h5 {
  margin-top: 20px;
  margin-bottom: 10px;
  text-decoration: none;
  font-weight: normal;
}

h5.text-right {
  text-align: right;
  margin-right: 15%;
  margin-bottom: 50px;
}

h5.p-4 {
  margin-left: 20px;
  margin-top: 40px;
}

a,
button {
  margin: 0px auto;
  border-radius: 50px;
  text-decoration: none;
}

form {
  font-family: Roboto;
  max-width: 760px;
  background: white;
  text-align: left;
  padding: 40px 40px 10px 40px;
  border-radius: 25px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 5px 0px 5px 50px;
  font-size: 1em;
  letter-spacing: 1px;
  font-weight: normal;
}
</style>