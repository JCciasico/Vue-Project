<template>
<div>
  <nav>
      <NavbarTop />
      <TitleHeader/>
  </nav>
    <div>
      <b-tabs justified>
        <div class="topnav">
          <a class="disable"><b id="top-nav">Routes</b></a>
          <a class="active"><b id="top-nav" style="color:white">Other Details</b></a>
          <a class="disable"><b id="top-nav">Price</b></a>
        </div>
      </b-tabs>
    </div>
<!-- OTHER DETAILS TAB -->
      <a id="Other Details" class="tabcontent"></a>
        <div class="container-fluid titleone" >
        <h3>Services</h3>
    </div>
     <div class="container-fluid titleonea">
        <div>
        <span id="user">Standard Service</span> &nbsp;&nbsp;<i class="fa-solid fa-circle-info" style="color:#FBCD10;"></i>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: right;"/>
        <div><span id="user" style="margin-left:3rem;">--</span></div>
  
      </div>
    </div>
    <div class="container-fluid titleonea">
        <div>
       <span id="user">Special Assistance</span> &nbsp;&nbsp;<i class="fa-solid fa-circle-info" style="color:#FBCD10;"></i>
        
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: right;"/>
        <div><span id="user" style="margin-left:3rem;">--</span></div>
      </div>
    </div>
    <div class="container-fluid titleonea">
        <div>
        <span id="user">Customer Service</span> &nbsp;&nbsp;<i class="fa-solid fa-circle-info" style="color:#FBCD10;"></i>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: right;"/>
        <div><span id="user" style="margin-left:3rem;">--</span></div>
      </div>
    </div>
    <div class="container-fluid titleonea">
        <div>
        <span id="user">Tarpaulin Cover</span> &nbsp;&nbsp;<i class="fa-solid fa-circle-info" style="color:#FBCD10;"></i>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: right;"/>
        <div><span id="user" style="margin-left:3rem;color:#003060">P50</span></div>
      </div>
    </div>
<!--Remarks-->
    <div class="container-fluid titletwo">
        <h3>Remarks</h3>
    </div>
      <div class="container-fluid titletwoa">
        <form>
         <textarea id="subject" name="subject" placeholder="Additional information or instruction for you delivery..."></textarea>
         <a href="#" class="button2 button4">Submit</a>
        </form>
        </div>
    <center>
    <a href="/routes" class="button1 button4">&nbsp;BACK</a>
    <a href="/price" class="button button4">NEXT&nbsp;</a>
    </center>
      <!-- insert here OTHER DETAILS content -->
</div>
</template>


<script>
import NavbarTop from '../../Navbar/NavbarTop.vue'
import TitleHeader from '../Price/components/TitleHeader.vue'

  export default {
    name: 'NavBody',
    components: {
    NavbarTop,
    TitleHeader
  }
  
       
  }
</script>

<style scoped>


/* topnav style */

.topnav {
  overflow: hidden;
  background-color: white;
  align-self: center;

}
.topnav a{
  width: 33.3%;
  float: left;
  font-family: Arial;
  color: black;
  text-align: center;
  padding: 10px;
  text-decoration:none;
  font-size: 17px;
}
.topnav a.active {
   border: 1px solid grey;
  color: solid white;
  background-color: #1267bd;
}
.topnav a.disable {
   border: 1px solid grey;
  color: solid white;
}
.titleone{
    background-color: #003060;
    padding: .4rem;
    color: white;
    padding-left: 2rem;
    width: 50rem;
    margin-top:2%;
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

textarea {
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px gray;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  color: gray;
  resize: none;
}
#user{
  font-family: 'Poppins','sans-serif';
  font-size: 1.1rem;
  color: black;
}
.button:hover {
  background: #ffae00;
  color: rgb(255, 255, 255);
}
.button {
  background-color:#FBCD10; /* button */
  border: none;
  color: black;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Poppins','sans-serif';
  box-shadow: 0px 3px 10px 1px gray;
  margin: 4px 2px;
  cursor: pointer;
}
.button1 {border-radius: 4rem;}   
.button1:hover {
  background: #ffae00;
  color: rgb(255, 255, 255);
}
.button1{
  background-color: #FBCD10; 
  border: none;
  color: black;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-family: 'Poppins','sans-serif';
  box-shadow: 0px 3px 10px 1px gray;
  margin: 4px 2px;
  cursor: pointer;
}
.button {border-radius: 4rem;}  
.button2:hover {
  background: #ffae00;
  color: rgb(255, 255, 255);
}   
.button2 {
  background-color:#FBCD10; /* submitbutton color*/
  border: none;
  color: black;
  padding: 9px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-family: 'Poppins','sans-serif';
  box-shadow: 0px 3px 10px 1px gray;
  margin: 3px 2px;
  cursor: pointer;
}
.tabcontent {
  display: none;
  padding: 6px 12px;
}
@media (max-width:700px){
    .topnav {
     overflow: hidden;
     background-color: white;
     align-self: center;
     width:100vw;
    }
    .titleone{
    width: 25rem;
    }
    .titletwo{
    width: 25rem;
    }
    .tabcontent {
     display: none;
     padding: 6px 12px;
}
} 
    @media (max-width:600px){
    .titleonea{
    width: 25rem;
    }
    .titletwoa{
    width: 25rem;
    }
    }
    @media(max-width:400px){
    #top-nav{
      font-size: 0.8rem;
    }
}
@media (max-width:400px) {
  .titleonea {
    width: 20rem;
  }

  .titletwoa {
    width: 20rem;
  }

  .titleone {
    width: 20rem;
  }

  .titletwo {
    width: 20rem;
  }
}

@media(max-width:400px) {
  #top-nav {
    font-size: 0.rem;
  }
}

@media(max-width:300px) {
  #top-nav {
    font-size: 0.5rem;
    }
}
</style>