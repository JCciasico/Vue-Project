<template>
    <div class="completeorder-body">
        <nav>
            <NavbarTop />
            <TitleHeader />
        </nav>
        <div>
            <b-tabs justified>
                <div class="topnav">
                    <a href="/toship" class="disable"><b id="top-nav">To ship</b></a>
                    <a href="/ongoing" class="disable"><b id="top-nav">On going</b></a>
                    <a href="/complete" class="active"><b id="top-nav" style="color:white">Completed</b></a>
                    <a href="/cancel" class="disable"><b id="top-nav">Cancelled</b></a>
                </div>
            </b-tabs>
        </div>

        <b-container class="complete">
            <b-nav>
                <!--ORDER-->
                <br>
                <b-row>
                    <div class="container-fluid box-header">
                        <div class="row">
                            <div class="col-6 text-left" style="height: 10px;">
                                <h3 id="date-time">March 25,2022 3:00PM</h3>
                            </div>
                            <div class="col-15 text-left" style="margin-left:2ch;">
                                <b-row>
                                    <ModalCompleteOrders />
                                </b-row>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid address">
                        <i class="fa-regular fa-circle" style="color:#FBCD10; margin-left: 3ch;"></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span id="pu-address">House No., Street, City, Country, Postal
                            Code</span>
                        <br>
                        <br>
                        <i class="fa-solid fa-location-dot" style="color:#FBCD10; margin-left: 3ch;"></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span id="do-address">House No., Street, City, Country, Postal
                            Code</span>
                    </div>

                    <div class="container-fluid box-footer">
                        <div class="row">
                            <div class="col-6 text-left" style="color: black; height: 20px;">
                                <span id="vehicle-type">Truck</span>
                            </div>
                            <div class="col-6 text-center">
                                <span id="price">P424</span>
                            </div>
                        </div>
                    </div>
                </b-row>
                <!--ORDER-->
                <br>
                <b-row>
                    <div class="container-fluid box-header">
                        <div class="row">
                            <div class="col-6 text-left" style="height: 10px;">
                                <h3 id="date-time">March 25,2022 3:00PM</h3>
                            </div>
                            <div class="col-15 text-left" style="margin-left:2ch;">
                                <b-row>
                                    <ModalCompleteOrders />
                                </b-row>
                            </div>
                        </div>
                    </div>
                    <div class="container-fluid address">
                        <i class="fa-regular fa-circle" style="color:#FBCD10; margin-left: 3ch;"></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span id="pu-address">House No., Street, City, Country, Postal
                            Code</span> <br>
                        <br>
                        <i class="fa-solid fa-location-dot" style="color:#FBCD10; margin-left: 3ch;"></i>
                        &nbsp;&nbsp;&nbsp;&nbsp;<span id="do-address">House No., Street, City, Country, Postal
                            Code</span>
                    </div>

                    <div class="container-fluid box-footer">
                        <div class="row">
                            <div class="col-6 text-left" style="color: black; height: 20px;">
                                <span id="vehicle-type">Truck</span>
                            </div>
                            <div class="col-6 text-center">
                                <span id="price">P424</span>
                            </div>
                        </div>
                    </div>
                </b-row>
            </b-nav>
        </b-container>
    </div>
</template>

<script>
import ModalCompleteOrders from './ModalCompleteOrders.vue';
import NavbarTop from '../../../components/Navbar/NavbarTop.vue';
import TitleHeader from './TitleHeader.vue';

export default {
    name: "CompleteOrders",
    components: { ModalCompleteOrders, NavbarTop, TitleHeader }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Poppins:ital,wght@0,600;1,400&display=swap');

.completeorder-body {
    height: 100%;
    background-color: white;
}

.box-header {
    background-color: #003060;
    padding: .4rem;
    color: white;
    padding-left: 2rem;
    width: 50rem;
}

.address {
    background-color: #ffffff;
    padding: 1rem;
    color: rgb(8, 8, 8);
    padding-left: 2rem;
    width: 50rem;
    border: 1px solid rgb(156, 151, 151);
}

.box-footer {
    background-color: rgb(224, 224, 238);
    padding: 0rem;
    color: rgb(8, 8, 8);
    padding-left: 1rem;
    width: 50rem;
    border: 1px solid rgb(156, 151, 151);
    text-align: left;
}

#date-time {
    color: white;
    font-weight: bold;
    margin-left: 1ch;
    font-size: large;
}

#vehicle-type {
    color: black;
    font-weight: bold;
    margin-left: 10ch;
}

#price {
    color: navy;
    font-weight: bold;
}

#cancel {
    background-color: yellow;
    color: black;
    font-family: 'Poppins', 'sans-serif';
    font-size: 1em;
    padding: .5em;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 4rem;
}

.topnav {
    overflow: hidden;
    background-color: white;
    align-self: center;
    margin-top: -8px;
}

.topnav a {
    width: 25%;
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

a.disable:hover {
    background-color: #FBCD10;
}

@media (max-width:700px) {

    /* .topnav {
        width: 25em;
    } */

    .box-header {
        width: 22rem;
    }

    .address {
        width: 22rem;
    }

    .box-footer {
        width: 22rem;
    }
}

@media (max-width:350px) {
    .topnav {
        width: 19em;
    }

    .topnav a {
        width: 25%;
    }

    .box-header {
        width: 17rem;
    }

    .address {
        width: 17rem;
    }

    .box-footer {
        width: 17rem;
    }
}


/* for top nav */
@media(max-width:400px){
    #top-nav{
      font-size: 0.8rem;
    }
}
@media(max-width:350px){
    #top-nav{
      font-size: 0.5rem;
    }
}
</style>
