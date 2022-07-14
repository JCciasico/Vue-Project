<template>
<div>

    <!--TITLE HEADER-->
    <div class="container-fluid title">
        <h3>New Booking</h3>
    </div>
    <!--other details Tab-->
  <div>
  <b-tabs justified>
    <div class="topnav">
    <a class="disable"><b id="top-nav">Routes</b></a>
    <a class="disable"><b id="top-nav">Other Details</b></a>
    <a class="active"><b id="top-nav" style="color:white">Price</b></a>
  </div>
  </b-tabs>
  </div>
    <div><br></div>
    <!--For Booking Details-->
  <div class="container-fluid titleone" >
      <h3>Booking Details</h3>
 </div>
  <div class="container-fluid titleonea">
    <div class="row" style="padding-left: 2rem">
      <div class="col-md-5">
       <div class="container p-3 text-center" style="border: 2px solid #0D7CFF">
         <label for="file"><b-icon class="icona" icon="plus-circle" scale="2"></b-icon></label>
         <br><br>
         <input type="file" id="file" style="display:none;"> 
         <p class="par1">Take a Photo<br>Upload Image</p>  
         </div>
         </div>
         <div class="col-md-7 details" style="margin:auto;">
         <div class="row" style="text-align:left; color: black;">
        <div class="col-4">
        <p style="color:grey;">Vehicle Type</p>
        </div>
        <div class="col">
        <span style="font-weight:bold; color: black;">Small Pickup</span>
        </div>
         </div>
         <div class="row" style="text-align:left; color: black;">
         <div class="col-4">
        <p style="color:grey;">Pickup</p>
       </div>
        <div class="col">
         <span style="font-weight:bold; color: black;">3:00pm, March 21, 2022</span>
         </div>
         </div>
         <div class="row" style="text-align:left; color: black;">
          <div class="col-4">
            <p style="color:grey;">Distance</p>
             </div>
              <div class="col">
             <span style="font-weight:bold; color: black;">18 km</span>
             </div>
             </div>
            </div>
  </div>
</div>
<!--For Price breakdown-->
    <div class="container-fluid titletwo">
        <h3>Price Breakdown</h3>
    </div>
     <div class="container-fluid titletwoa">
        <div class="row">
            <div class="container">
                <div class="row">
                    <div class="col-6" style="color: grey; height: 25px;">
                        <p class="standard">Standard Fare 18 km</p>
                    </div>
                    <div class="col-6 text-center">
                        <span style="font-weight:bold; color: black;">P374</span>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12" style="color: grey; height: 25px;">
                        <p>Extra Services</p>
                    </div>
                </div>
                <div class="row" style="height:55px">
                    <div class="col-6" style="color: grey;">
                        <ul  class="for" style="list-style:none;">
                            <li>Standard Service</li>
                            <li>Tarpaulin Cover</li>
                        </ul>
                    </div>
                    <div class="col-5 text-center">
                        <ul>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-weight:bold; color: black;">Free</span></li>
                            <li>&nbsp;&nbsp;&nbsp;&nbsp;<span style="font-weight:bold; color: black;">P50</span></li>
                        </ul>
                    </div>
                </div>
                <div class="row">
                    <div class="col-6" style="color: black; height: 25px;">
                        <span style="color:#003060; font-weight:bold;">Total</span>
                    </div>
                    <div class="col-6 text-center">
                        <span style="color:#003060; font-weight:bold;">P424</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--For mode of payment-->
    <div class="container-fluid titlethree">
        <h3>Mode of Payment</h3>
    </div>
     <div class="container-fluid titlethreea">
        <select id="state" class="form-select">
         <option selected><b id="mop">Cash on Delivery</b></option>
         <option><b>GCASH</b></option>
         <option><b>Bank</b></option>
        </select>
    </div>
<!--For contacts-->
    <div class="container-fluid titlefour">
        <h3>Contacts</h3>
    </div>
    <!--Require Signature-->
     <div class="container-fluid titlefoura">
      <div>
        <span id="user">Require Signatures</span>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: right;"/>
      </div>
    </div>
    <!--Sender Location-->
    <div class="container-fluid titlefourb">
    <i class="far fa-circle" id="iconc" style="color:#FBCD10;"></i>
        &nbsp;&nbsp;<span id="usera">House No., Street, City, Country, Postal Code</span>


    <b-col sm="10">
      <b-form-input id="input" placeholder="Sender's Name" style="box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4);"></b-form-input>
    </b-col>
        <br>
      <div class="input-group mb-3" >
  <div class="input-group-prepend">
    <span class="input-group-text">+63</span>
  </div>
  <input type="number"  class="form-control" >
</div>
        <br>
        <!--Recipients Location-->
         

    <i class="fas fa-map-marker-alt" id="iconc" style="color:#FBCD10;"></i>
        &nbsp;&nbsp;<span id="usera">House No., Street, City, Country, Postal Code</span>
        <b-col sm="10">
      <b-form-input id="input" placeholder="Recipient's Name" style="box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4);" ></b-form-input>
    </b-col>
    <br><div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text">+63</span>
  </div>
  <input type="number" class="form-control">
</div>
<div>
  <!--Responsible for payment-->
        <span id="userone">Responsible for payment</span>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."  style="color:#003060; float: left; margin-left:2rem;"/>
      </div>
    </div>
</div>
</template>

<script>
export default{
    name: 'BookTitle',
    
}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Poppins:ital,wght@0,600;1,400&display=swap');
#icargo{
  color: #003060;
  font-family: 'Poppins','sans-serif';
  font-size: 2rem;
}
#pacific{
  color: #FBCD10;
  font-family: 'Poppins','sans-serif';
  font-size: 2rem;
}
#userc{
  font-family: 'Poppins','sans-serif';
  font-size: 1.1rem;
}
.fa-circle-user {
  font-size: 2rem;
}
@media(max-width:500px){
  #icargo{
    font-size: 1.2rem;
  }
  #pacific{
    font-size: 1.2rem;
  }
  #userc{
    display: none;
  }

}



.title{
    background-color: #003060;
    padding:1rem;
    color: white;
    padding-left: 3rem;
}
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


#input{
    width:46.5rem;
    border-radius:5rem;  
}
#state{
    width:45rem;
    border-color:white;
    font-family: 'Poppins','sans-serif';

}
.par1{
    color:grey;
    font-size:14px;
    font-family: 'Arial';
}
.par2{
    color:black;
    font-size:14px;
    font-family: 'Poppins','sans-serif';
    margin-left:2rem;
}

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
.titlethree{
    background-color: #003060;
    padding: .4rem;
    color: white;
    padding-left: 2rem;
    width: 50rem;
}
.titlefour{
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
.titlethreea{
    background-color: #ffffff;
    padding: 1rem;
    color: white;
    padding-left: 2rem;
    width: 50rem;
    border: 2px solid grey;

}
.titlefoura{
    background-color: #ffffff;
    padding: 1rem;
    color: white;
    padding-left: 2rem;
    width: 50rem;
    border: 2px solid grey;
    border-bottom: 1.5px solid black;
}
.titlefourb{
    background-color: #ffffff;
    padding: 1rem;
    color: white;
    padding-left: 2rem;
    width: 50rem;
    border: 2px solid grey;
}

.icona{
    cursor:pointer; 
    color: #0D7CFF;
}
.icona:hover{
    cursor:pointer; 
    color: #FFC000;
}
#user{
  font-family: 'Arial';
  font-size: 1rem;
  color:grey;
}
#usera{
  font-family: 'Poppins','sans-serif';
  font-size: 1rem;
  color:rgb(49, 48, 48);
}
#usertwo{
  font-family: 'Poppins','sans-serif';
  font-size: 1rem;
  color:black;
}
#userone{
  font-family: 'Poppins','sans-serif';
  font-size: 1rem;
  color: black;
  margin:1rem;
}
.details{
    padding-left: 3rem;
}
.detailsA{
    padding-left: 1rem;
}
.input-group-text{
border-top-left-radius:5rem; 
border-bottom-left-radius: 5rem;
box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4);
}
.form-control{
 border-top-right-radius:5rem; 
border-bottom-right-radius: 5rem; 
box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4)
}
.row{
  padding-left:1rem;
}
#iconc{
  font-size:1rem;
}
@media (max-width:800px){
    .titleone{
    width: 35rem;
    }
    .titletwo{
    width: 35rem;
    }
    .titlethree{
    width: 35rem;
    }
    .titlefour{
    width: 35rem;
    }
     .titleonea{
    width: 35rem;
    }
    .titletwoa{
    width: 35rem;
    }
    .titlethreea{
    width: 35rem;
    }
    .titlefoura{
    width: 35rem;
    }
    .titlefourb{
    width: 35rem;
    }
    #input{
    width:32rem;
    }
    #state{
      width:22rem;
    }
    .row{
  padding-left:.5rem;
  }
  #iconc{
    padding-left:.1rem;
  } 
}
@media (max-width:700px){
    .titleone{
    width: 25rem;
    }
    .titletwo{
    width: 25rem;
    }
    .titlethree{
    width: 25rem;
    }
    .titlefour{
    width: 25rem;
    }
     .titleonea{
    width: 25rem;
    }
    .titletwoa{
    width: 25rem;
    }
    .titlethreea{
    width: 25rem;
    }
    .titlefoura{
    width: 25rem;
    }
    .titlefourb{
    width: 25rem;
    }
    #input{
    width:22rem;
    }
    #state{
      width:22rem;
    }
    .row{
  padding-left:.5rem;
  }
  #iconc{
    padding-left:.1rem;
  } 
}
@media (max-width:600px){
    .titleone{
    width: 25rem;
    }
    .titletwo{
    width: 25rem;
    }
    .titlethree{
    width: 25rem;
    }
    .titlefour{
    width: 25rem;
    }
    .titleonea{
    width: 25rem;
    }
    .titletwoa{
    width: 25rem;
    }
    .titlethreea{
    width: 25rem;
    }
    .titlefoura{
    width: 25rem;
    }
    .titlefourb{
    width: 25rem;
    }
    #input{
    width:22rem;
    }
     #state{
      width:22rem;
    } 
    .col-md-5{
      width:20rem;
    }
    .details{
    padding-left: 1rem;
}
 .form-check-input{
    margin-left:1rem;
  }
  #usera{
  font-size: .9rem;
}
  
}

@media (max-width:400px){
    .titleone{
    width: 20rem;
    }
    .titletwo{
    width: 20rem;
    }
    .titlethree{
    width: 20rem;
    }
    .titlefour{
    width: 20rem;
    }
    .titleonea{
    width: 20rem;
    font-size: 0.7rem;
    }
    .titletwoa{
    width: 20rem;
    font-size: 0.7rem;
    }
    .titlethreea{
    width: 20rem;
    }
    .titlefoura{
    width: 20rem;
    }
    .titlefourb{
    width: 20rem;
    }
    #input{
    width:16.7rem;
    }
     #state{
      width:17rem;
    } 
    .col-md-5{
      width:15rem;
    }
    .details{
    padding-left: 0.4rem;
}
 .form-check-input{
    margin-left:1rem;
  }
  #usera{
  font-size: .6em;
}
#userone{
  font-size: 0.7rem;
}
.form-select{
  font-size: 0.8rem;
}

}
@media(max-width:400px){
    #top-nav{
      font-size: 0.8rem;
    }
}
@media(max-width:300px){
    #top-nav{
      font-size: 0.5rem;
    }
}







</style>