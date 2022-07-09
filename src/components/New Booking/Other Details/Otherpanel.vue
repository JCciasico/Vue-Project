<template>
<div>
    <!--Services-->
    <div class="container-fluid titleone" >
        <h3>Services</h3>
    </div>
     <div class="container-fluid titleonea">
        <div>
        <span id="user">Special Assistance</span> &nbsp;&nbsp;<i class="far fa-circle" style="color:#FBCD10;"></i>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: right;"/>
        <div><span id="user" style="margin-left:3rem;">--</span></div>
        
      </div>
    </div>
    <div class="container-fluid titleonea">
        <div>
       <span id="user">Special Assistance</span> &nbsp;&nbsp;<i class="far fa-circle" style="color:#FBCD10;"></i>
        
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: right;"/>
        <div><span id="user" style="margin-left:3rem;">--</span></div>
      </div>
    </div>
    <div class="container-fluid titleonea">
        <div>
        <span id="user">Special Assistance</span> &nbsp;&nbsp;<i class="far fa-circle" style="color:#FBCD10;"></i>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: right;"/>
        <div><span id="user" style="margin-left:3rem;">--</span></div>
      </div>
    </div>
    <div class="container-fluid titleonea">
        <div>
        <span id="user">Special Assistance</span> &nbsp;&nbsp;<i class="far fa-circle" style="color:#FBCD10;"></i>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: right;"/>
        <div><span id="user" style="margin-left:3rem;">P50</span></div>
      </div>
    </div>
<!--Remarks-->
    <div class="container-fluid titletwo">
        <h3>Remarks</h3>
    </div>
     <div class="container-fluid titletwoa">
        <h6 style="color:black;">Additional information or instuction for you delivery</h6>
        </div>
    <center>
    <a href="#" class="button1 button4">&laquo;BACK</a>
    <a href="#" class="button button4">NEXT&raquo;</a>
    </center>
    </div>

</template>

<script>
export default{
    name: 'BookTitle',
    
}

</script>
<style scoped>

.titleone{
    background-color: #003060;
    padding: .4rem;
    color: white;
    padding-left: 2rem;
    width: 50rem;
}
.titletwo{
    background-color: #003060;
    padding: .4rem;
    color: white;
    padding-left: 2rem;
    width: 50rem;
}

.titleonea{
    background-color: #ffffff;
    padding: 1rem;
    color: white;
    padding-left: 1rem;
    width: 50rem;
    border: 2px solid grey;
}
.titletwoa{
    background-color: #ffffff;
    padding: 1rem;
    color: white;
    padding-left: 2rem;
    width: 50rem;
    border: 2px solid grey;

}
#user{
  font-family: 'Poppins','sans-serif';
  font-size: 1.1rem;
  color: black;
}
a:hover {
  background-color: #ddd;
  color: black;
}
.button {
  background-color:#FBCD10; /* Green */
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button1 {border-radius: 10px;}   
.button1{
  background-color: white; 
  border: none;
  color: rgb(112, 68, 68);
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button {border-radius: 10px;}     


</style>