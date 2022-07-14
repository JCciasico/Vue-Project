<template>
<center>
  <div id="package">
    
    <form>
      <!-- insert here my code-->

    <br><br>
    
    <p>
        <a @click="addPackage"> <i class="fa-solid fa-circle-plus"></i> </a> Add another package
    </p>
    
      <br>

      <div class="Adding"
      v-for="(applicant, counter) in applicants"
      v-bind:key="counter">
        <span @click="deletePackage(counter)"><i class="fa-solid fa-circle-xmark"></i></span>
            <label for="duration">Additional Package #{{counter+1}}</label>
            <form class="container-fluid d-flex justify-content-center">
                <input class="forinput" type="number" placeholder="  Length (cm)" v-model="applicant.length" required>
                <input type="number" placeholder="  Width (cm)" v-model="applicant.width" required>
                <input type="number" placeholder="  Height (cm)" v-model="applicant.height" required>
                <input type="number" placeholder="  Weight (kg)" v-model="applicant.weight" required>
            </form>
            <br><br>
      </div>
      
    </form>
</div>
</center>
</template>

<script>
export default {
  name: 'AddPackage',
  props: {
    msg: String
  },
  data(){
    return {
       applicants:[
       {
      lenght: '',
      width: '',
      height: '',
      weight: '',
      expiration:''
       }
     ]
    }
  },
  methods : {
    addPackage(){
      this.applicants.push({
        lenght: '',
        width: '',
        height: '',
        weight: '',
        expiration: ''
      })
    },
    deletePackage(counter){
      this.applicants.splice(counter,1);
}
  }
}
</script>


<style scoped>
#package {
  max-width: 80rem;
  outline: none;

}
label{
  display: block;
  margin: 20px 0 10px;
}
input {
  font-size: 20px;
  border: 1px double rgb(102, 97, 96) ;
  border-radius: 4px;
  padding: 5px;
  width: 18rem;
}
span{
  width: 30px;
  float: right;
  cursor: pointer;
}
span:hover{
  color: rgb(5, 76, 242);
}
.Adding{
  border: 1px solid;
  padding:5px;
  margin-bottom: 10px;
}
p{
    color: #003060;
    font-family: 'Poppins','sans-serif';
    font-size: 20px;
}
p:hover{
    color: #FBCD10;
    font-family: 'Poppins','sans-serif';
    font-size: 20px;
    cursor: pointer;
}
label{
    color: #003060;
    font-family: 'Poppins','sans-serif';
    font-size: 1rem;
}
@media(max-width:970px){
  input{
    width: 12rem;
  }
}
@media(max-width:770px){
  input{
    width: 10rem;
  }
}
@media(max-width:650px){
  input{
    width: 8rem;
  }
}

@media (max-width:500px) {
    input {
        font-size: 20px;
        border: 1px double rgb(102, 97, 96) ;
        border-radius: 4px;
        padding: 5px;
        width: 5.5rem; 
    }
    .Adding {
        border: 1px solid;
        padding:1px;
        margin-bottom: 10px;
    }
    p{
        color: #003060;
        font-family: 'Poppins','sans-serif';
        font-size: 1.2rem;
    }
    label{
        color: #003060;
        font-family: 'Poppins','sans-serif';
        font-size: 15px;
    }
}
</style>