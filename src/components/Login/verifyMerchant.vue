<template>
  <div class="bg container-fluid">
    <form> 
      <h1 class="text-dark text-center">Account Verification</h1>
      <v-app class="form">
        <label id="label" class="text-muted required">
          Proof of Identification
        </label>
        <v-row justify="center" class="custom-row">
          <v-col sm="10">
            <v-select label="Choose Government-issued ID Type" class="select" background-color="#eef5fd" :items="items"
              solo rounded>
            </v-select>
            <div>
            <label class="text-muted required" style="margin-left:40px">
              Photo of your ID Card
            </label>
            <label id="sLabel" class="text-muted required">ㅤㅤㅤBusiness Permit
            </label>
            <v-row class="d-inline-flex">
              <v-col class="form-group text-center d-flex">
                <v-file-input class="idInput" background-color="#eef5fd" label="Choose File..." solo rounded
                  prepend-icon="mdi-camera"></v-file-input>
              </v-col>
              <v-col form-group text-center d-flex>
                <v-file-input class="permitInput" background-color="#eef5fd" label="Choose File..." solo rounded
                  prepend-icon="mdi-camera"></v-file-input>
              </v-col>
            </v-row>
            </div>
            <v-row class="container">
              <v-col class="center d-flex" style="margin-left:35px; margin-top:20px;">
                <input type="checkbox" id="accept" value="accept" />
                <label for="accept" class="check text-dark">
                  I have read, understood and accept the <br />
                  Terms and Conditions and Privacy Policy.</label>
              </v-col>
            </v-row>
            <br />
            <p class="p-4 text-muted text-center mt-5">
              Already have an account?
              <a href="/" class="text-primary">
                Sign in.</a>
            </p>
            <v-row class="container" style="margin-left:165px" >
              <v-col class="center">
                <a href="/signup" id="buttons" class="text btn btn-light btn-lg shadow text-muted">Back</a>
                <a href="/registration" id="buttons" class="text btn btn-warning btn-lg shadow text-light">Sign
                  Up</a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-app>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  data: () => ({
    items: [
      "Driver's License",
      "OFW ID",
      "Passport",
      "PhilHealth",
      "PhilSys ID",
      "Postal ID",
      "PRC ID",
      "SSS",
      "UMID",
      "Alien Certificate of Registration",
    ],
  }),
};
</script>

<style>
.bg {
  height: 100vh;
  background: linear-gradient(to bottom right,
      #280eb8,
      #3352db,
      #4c9cca,
      rgb(79, 135, 187));
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  height: 400px;
}
h1 {
  font-weight: bold;
  font-family: Roboto;
}

form {
  font-family: Roboto;
  width: 900px;
  margin: auto;
  background: white;
  text-align: left;
  padding: 40px 0;
  border-radius: 50px;
}

#label {
  color: #aaa;
  display: inline-block;
  text-align: left;
  margin-left: 110px;
  font-size: 1em;
  letter-spacing: 1px;
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

#vLabel {
  margin-left: -200px;
}

#sLabel {
  margin-left: 140px;
}

.idInput {
  width: 340px;
  display: inline-block;
  color: #3eb3f4;
}

.permitInput {
  width: 340px;
  display: inline-block;
  box-sizing: border-box;
  margin: 0 40px;
  color: #3eb3f4;
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

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]+*::before {
  content: "";
  display: inline-block;
  float: left;
  margin-left: 40px;
  margin-top: 5px;
  margin-right: -320px;
  vertical-align: bottom;
  width: 2rem;
  height: 2rem;
  border-style: solid;
  border-width: 0.2rem;
  border-color: yellow;
}

input[type="checkbox"]:checked+*::before {
  content: "✓";
  font-size: 1.2rem;
  font-weight: bolder;
  color: yellow;
  text-align: center;
  background: white;
  border-color: yellow;
}

input[type="checkbox"]:checked+* {
  color: yellow;
}

.check {
  position: inline-block;
  margin: 0 auto;
  text-align: center;
  top: 0;
  left: 0;
  width: 480px;
}

</style>