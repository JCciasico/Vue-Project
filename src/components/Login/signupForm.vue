<template>
  <div class="bg container-fluid py-5 p-1">
    <form>
      <h1 class="text-dark text-center py-2">
        Be an <span class="text-primary"> iCargo </span><span class="text-warning"> Merchant </span> today!
      </h1>
      <label class="text-left text-muted required"> First Name </label>
      <v-text-field v-model="firstname" name="firstname" id="firstname" class="field d-block mx-auto"
        background-color="#eef5fd" :rules="[rules.required, rules.firstname, rules.shortcounter]" rounded solo filled
        dense maxlength="50">
      </v-text-field>

      <label class="text-left text-muted required"> Last Name </label>
      <v-text-field v-model="lastname" :rules="[rules.required, rules.lastname, rules.shortcounter]" name="lastname"
        id="lastname" class="field d-block mx-auto" background-color="#eef5fd" rounded solo filled dense maxlength="50">
      </v-text-field>

      <label class="text-left text-muted required"> Contact Number </label>
      <label class="text-left text-muted required newLabel"> Email </label>
      <div class="d-inline-flex">
        <div class="form-group text-center d-flex">
          <v-text-field id="phone_code" name="phone_code" class="firstInput" background-color="#eef5fd"
            placeholder="+63" disabled rounded solo filled dense>
          </v-text-field>

          <v-text-field v-model="contact_number" id="contact_number" name="contact_number" class="secondInput"
            background-color="#eef5fd" :rules="[rules.required, rules.contact_number]" rounded solo filled dense
            maxlength="10">
          </v-text-field>
        </div>
        <div>
          <v-text-field v-model="email" name="email" id="email" class="emailInput" background-color="#eef5fd"
            :rules="[rules.required, rules.email, rules.shortcounter]" rounded solo filled dense maxlength="50">
          </v-text-field>
        </div>
      </div>

      <label class="text-left text-muted required"> Name of Business </label>
      <v-text-field id="business_name" v-model="business_name" name="business_name" class="field d-block mx-auto"
        background-color="#eef5fd" :rules="[rules.required, rules.counter, rules.longcounter]" rounded solo filled dense
        maxlength="100">
      </v-text-field>

      <label class="text-left text-muted required"> Password </label>
      <v-text-field v-model="password" name="password" id="password" class="field d-block mx-auto"
        background-color="#eef5fd" :rules="[rules.required, rules.password]" rounded solo filled dense
        :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show">
      </v-text-field>

      <label class="text-left text-muted required"> Re-type password </label>
      <v-text-field v-model="confirmPassword" name="confirmPassword" id="confirmPassword" class="field d-block mx-auto"
        background-color="#eef5fd" :rules="[rules.required, rules.confirmPassword]" rounded solo filled dense
        :type="show ? 'text' : 'password'" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'" @click:append="show = !show">
      </v-text-field>

      <p class="text-muted text-center">
        Already have an account?<a href="/" class="text-primary">
          Sign in.</a>
      </p>

      <div class="container">
        <div class="center">
          <a href="/" id="buttons" class="text btn btn-light btn-lg shadow text-muted">Back</a>
          <a href="/verify" id="buttons" class="text btn btn-warning btn-lg shadow text-light">Next</a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      firstname: "",
      lastname: "",
      contact_number: "",
      email: "",
      business_name: "",
      password: "",
      confirmPassword: "",
      rules: {
        required: (value) => !!value || "Required.",
        shortcounter: (value) =>
          value.length <= 50 || "Maximum of 50 characters only",
        longcounter: (value) =>
          value.length <= 100 || "Maximum of 100 characters only",
        confirmPassword: (value) =>
          value == this.password || "The password does not match.",
        firstname: (value) => {
          const pattern =
            /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
          return pattern.test(value) || "Invalid first name.";
        },
        lastname: (value) => {
          const pattern =
            /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
          return pattern.test(value) || "Invalid last name.";
        },
        contact_number: (value) => {
          const pattern = /^\d{10}$/
          return pattern.test(value) || "Invalid contact number.";
        },
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
        business_name: (value) => {
          const pattern = /^.{,50}$/;
          return pattern.test(value) || "Invalid business name.";
        },
        password: (value) => {
          const pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
          return (
            pattern.test(value) ||
            "Password must contain at least lowercase letter, one number, a special character and one uppercase letter."
          );
        },
      },
    };
  },
};
</script>

<style scoped>
.bg {
  height: 100%;
  background: linear-gradient(to bottom right,
      #280eb8,
      #3352db,
      #4c9cca,
      rgb(79, 135, 187));
}

h1 {
  font-weight: bold;
}

p {
  margin-top: -5px;
  margin-bottom: 50px;
}

router-link.text {
  text-decoration: none;
  font-size: 1.5em;
}

#buttons {
  margin: 0 15px;
  padding: 10px 40px;
  border-radius: 20px;
  text-decoration: none;
  font-weight: bold;
}

form {
  font-family: Roboto;
  max-width: 900px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px 0;
  border-radius: 50px;
  margin-bottom: 100px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 0 140px;
  font-size: 1em;
  letter-spacing: 1px;
}

.newLabel {
  color: #aaa;
  display: inline-block;
  margin: 0 40px;
  font-size: 1em;
  letter-spacing: 1px;
}

.field {
  display: block;
  margin: 0 auto;
  width: 640px;
  box-sizing: border-box;
  border: none;
  color: #3eb3f4;
}

.required:after {
  content: " *";
  color: red;
}

.container {
  position: relative;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.firstInput {
  width: 80px;
  display: inline-block;
  text-align: left;
  margin-left: 130px !important;
  z-index: 1;
}

.secondInput {
  width: 250px;
  display: inline-block;
  margin-left: -20px !important;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.emailInput {
  width: 315px;
  margin-left: 20px !important;
  display: inline-block;
  box-sizing: border-box;
  border: none;
}
</style>