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
          <a class="disable"><b>Routes</b></a>
          <a class="disable"><b>Other Details</b></a>
          <a class="active"><b style="color:white">Price</b></a>
        </div>
      </b-tabs>
    </div>
    <div><br></div>
    <!--For Booking Details-->
    <div class="container-fluid titleone">
      <h3>Booking Details</h3>
    </div>
    <div class="container-fluid titleonea">
      <div class="row" style="padding-left: 2rem">
        <div class="col-md-5">
          <div class="container p-3" style="border: 2px solid #0D7CFF">
            <label for="file">
              <b-icon class="icona" icon="plus-circle" scale="2"></b-icon>
            </label>
            <br><br>
            <input type="file" id="file" style="display:none;">
            <p class="par1">Take a Photo<br>Upload Image</p>
          </div>
        </div>
        <div class="col-md-7 details" style="margin:auto;">
          <div class="row" style="text-align:left; color: black;">
            <div class="col-4" style="column-gap: 2rem">
              <p style="color:grey;">Vehicle Type</p>
            </div>
            <div class="col">
              <span style="font-weight:bold; color: black;">Small Pickup</span>
            </div>
          </div>
          <div class="row" style="text-align:left; color: black;">
            <div class="col-4" style="column-gap: 2rem">
              <p style="color:grey;">Pickup</p>
            </div>
            <div class="col">
              <span style="font-weight:bold; color: black;">3:00pm, March 21, 2022</span>
            </div>
          </div>
          <div class="row" style="text-align:left; color: black;">
            <div class="col-4" style="column-gap: 2rem">
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
        <div class="container" style="padding-left: 100px;">
          <div class="row">
            <div class="col-6" style="color: grey; height: 25px;">
              <p>Standard Fare 18 km</p>
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
              <ul style="list-style:none;">
                <li>&nbsp;&nbsp;&nbsp;&nbsp;Standard Service</li>
                <li>&nbsp;&nbsp;&nbsp;&nbsp;Tarpaulin Cover</li>
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
        <option selected><b>Cash on Delivery</b></option>
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
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."
          style="color:#003060; float: right;" />
      </div>
    </div>
    <!--Sender Location-->
    <div class="container-fluid titlefourb">
      <i class="far fa-circle" style="color:#FBCD10;"></i>
      &nbsp;&nbsp;<span id="usera">House No., Street, City, Country, Postal Code</span>


      <b-col sm="10">
        <b-form-input id="input" placeholder="Sender's Name" style="box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4);">
        </b-form-input>
      </b-col>
      <br>
      <div class="input-group mb-3" style="width:40rem; margin-left:4rem;">
        <div class="input-group-prepend">
          <span class="input-group-text"
            style="border-top-left-radius:5rem; border-bottom-left-radius: 5rem; box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4)">+63</span>
        </div>
        <input type="number" class="form-control"
          style="border-top-right-radius:5rem; border-bottom-right-radius: 5rem; box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4)">
      </div>
      <br>
      <!--Recipients Location-->


      <i class="fas fa-map-marker-alt" style="color:#FBCD10;"></i>
      &nbsp;&nbsp;<span id="usera">House No., Street, City, Country, Postal Code</span>
      <b-col sm="10">
        <b-form-input id="input" placeholder="Recipient's Name"
          style="box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4);"></b-form-input>
      </b-col>
      <br>
      <div class="input-group mb-3"
        style="width:40rem; margin-left:4rem;box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4) s;">
        <div class="input-group-prepend">
          <span class="input-group-text"
            style="border-top-left-radius:5rem; border-bottom-left-radius: 5rem; box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4)">+63</span>
        </div>
        <input type="number" class="form-control"
          style="border-top-right-radius:5rem; border-bottom-right-radius: 5rem; box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4)">
      </div>
      <div>
        <!--Responsible for payment-->
        <span id="userone">Responsible for payment</span>
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."
          style="color:#003060; float: left; margin-left:6rem;" />
      </div>
    </div>

    <!--Button-->
    <div>
      <div class="button">
        <center>
          <a href="/details" class="nextback">Back</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="/toship" class="nextplace" type="submit">Place Order </a>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookTitle',

}

</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Poppins:ital,wght@0,600;1,400&display=swap');

#icargo {
  color: #003060;
  font-family: 'Poppins', 'sans-serif';
  font-size: 2rem;
}

#pacific {
  color: #FBCD10;
  font-family: 'Poppins', 'sans-serif';
  font-size: 2rem;
}

#user {
  font-family: 'Poppins', 'sans-serif';
  font-size: 1.1rem;
}

.fa-circle-user {
  font-size: 2rem;
}

@media(max-width:500px) {
  #icargo {
    font-size: 1.2rem;
  }

  #pacific {
    font-size: 1.2rem;
  }

  #userc {
    display: none;


  }

}


.title {
  background-color: #003060;
  padding: 1rem;
  color: white;
  padding-left: 3rem;
}

.topnav {
  overflow: hidden;
  background-color: white;
  align-self: center;

}

.topnav a {
  width: 33.3%;
  float: left;
  font-family: Arial;
  color: black;
  text-align: center;
  padding: 10px;
  text-decoration: none;
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


#input {
  width: 40rem;
  margin-left: 4rem;
  border-radius: 5rem;
}

#state {
  width: 45rem;
  border-color: white;
  font-family: 'Poppins', 'sans-serif';

}

.par1 {
  color: grey;
  font-size: 14px;
  font-family: 'Arial';
  margin-left: 5.5rem;
}

.par2 {
  color: black;
  font-size: 14px;
  font-family: 'Poppins', 'sans-serif';
  margin-left: 2rem;
}

.titleone {
  background-color: #003060;
  padding: .4rem;
  color: white;
  padding-left: 2rem;
  width: 50rem;
}

.titletwo {
  background-color: #003060;
  padding: .4rem;
  color: white;
  padding-left: 2rem;
  width: 50rem;
}

.titlethree {
  background-color: #003060;
  padding: .4rem;
  color: white;
  padding-left: 2rem;
  width: 50rem;
}

.titlefour {
  background-color: #003060;
  padding: .4rem;
  color: white;
  padding-left: 2rem;
  width: 50rem;

}

.titleonea {
  background-color: #ffffff;
  padding: 1rem;
  color: white;
  padding-left: 1rem;
  width: 50rem;
  border: 2px solid grey;
}

.titletwoa {
  background-color: #ffffff;
  padding: 1rem;
  color: white;
  padding-left: 2rem;
  width: 50rem;
  border: 2px solid grey;

}

.titlethreea {
  background-color: #ffffff;
  padding: 1rem;
  color: white;
  padding-left: 2rem;
  width: 50rem;
  border: 2px solid grey;

}

.titlefoura {
  background-color: #ffffff;
  padding: 1rem;
  color: white;
  padding-left: 2rem;
  width: 50rem;
  border: 2px solid grey;
  border-bottom: 1.5px solid black;
}

.titlefourb {
  background-color: #ffffff;
  padding: 1rem;
  color: white;
  padding-left: 2rem;
  width: 50rem;
  border: 2px solid grey;
}

.icona {
  cursor: pointer;
  color: #0D7CFF;
  margin-left: 7.3rem;
}

.icona:hover {
  cursor: pointer;
  color: #FFC000;
}

#user {
  font-family: 'Arial';
  font-size: 1rem;
  color: grey;
}

#usera {
  font-family: 'Poppins', 'sans-serif';
  font-size: 1rem;
  color: rgb(49, 48, 48);
}

#usertwo {
  font-family: 'Poppins', 'sans-serif';
  font-size: 1rem;
  color: black;
}

#userone {
  font-family: 'Poppins', 'sans-serif';
  font-size: 1rem;
  color: black;
  margin: 1rem;
}

.details {
  padding-left: 3rem;
}

.detailsA {
  padding-left: 1rem;
}

.button a {
  text-decoration: none;
  display: inline-block;
  border-radius: 1rem;
  padding: 3 rem;


}

.button a:hover {
  background-color: #FBCD10;
  color: rgb(254, 254, 254);
}

.nextback {
  background-color: white;
  color: grey;
  font-family: 'Poppins', 'sans-serif';
  font-size: 1em;
  padding: .5em;
  padding-left: 1rem;
  padding-right: 1rem;
  box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4)
}

.nextplace {
  background-color: white;
  color: grey;
  font-family: 'Poppins', 'sans-serif';
  font-size: 1em;
  padding: .5em;
  box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4)
}

.button {
  padding: 2.5rem;

}
</style>