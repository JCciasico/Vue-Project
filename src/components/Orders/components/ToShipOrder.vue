<template>
    <div class="toship-body">
        <nav>
            <NavbarTop />
            <TitleHeader />
        </nav>
        <div>
            <b-tabs justified>
                <div class="topnav">
                    <a class="active"><b style="color:white">To ship</b></a>
                    <a href="/ongoing" class="disable"><b>On going</b></a>
                    <a href="/complete" class="disable"><b>Completed</b></a>
                    <a href="/cancel" class="disable"><b>Cancelled</b></a>
                </div>
            </b-tabs>
        </div>
        <br>
        <b-container class="cancelled">
            <b-row>
                <div class="container-fluid titleone">
                    <div class="row">
                        <div class="col-6 text-left" style="height: 10px;">
                            <span style="color:white ; font-weight:bold; margin-left:1ch; font-size: large;">March 25,
                                2022 3:00PM</span>
                        </div>
                        <div class="col-15 text-left" style="margin-left:2ch;">
                            <div class="mb-1">
                                <b-button id="cancel" @click="showMsgBoxTwo" style="margin-left:50ch;">Cancel Order
                                </b-button>
                                {{ String(boxTwo) }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid titletwoa">
                    <i class="fa-regular fa-circle" style="color:#FBCD10; margin-left: 3ch;"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span id="user">House No., Street, City, Country, Postal Code</span> <br>
                    <br>


                    <i class="fa-solid fa-location-dot" style="color:#FBCD10; margin-left: 3ch;"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span id="user">House No., Street, City, Country, Postal Code</span>
                    <!--b-button variant="light" id="cancel" style="margin-left:50ch;">Cancel</b-button-->

                </div>

                <div class="container-fluid titletwob">
                    <div class="row">
                        <div class="col-6 text-left" style="color: black; height: 20px;">
                            <span style="color:black ; font-weight:bold; margin-left: 10ch;">Truck</span>
                        </div>
                        <div class="col-6 text-center">
                            <span style="color:navy; font-weight:bold;">P424</span>
                        </div>
                    </div>
                </div>
                </b-row>
                <br>
                <b-row>
                <div class="container-fluid titletwo">
                    <div class="row">
                        <div class="col-6 text-left" style="height: 10px;">
                            <span style="color:white ; font-weight:bold; margin-left:1ch; font-size: large;">March 25,
                                2022 3:00PM</span>
                        </div>
                        <div class="col-15 text-left" style="margin-left:2ch;">
                            <div class="mb-1">
                                <b-button id="cancel" @click="showMsgBoxTwo" style="margin-left:50ch;">Cancel Order
                                </b-button>
                                {{ String(boxTwo) }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-fluid titletwoa">
                    <i class="fa-regular fa-circle" style="color:#FBCD10; margin-left: 3ch;"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span id="user">House No., Street, City, Country, Postal Code</span> <br>
                    <br>


                    <i class="fa-solid fa-location-dot" style="color:#FBCD10; margin-left: 3ch;"></i>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span id="user">House No., Street, City, Country, Postal Code</span>
                    <!--b-button variant="light" id="cancel" style="margin-left:50ch;">Cancel</b-button-->
                </div>

                <div class="container-fluid titletwob">
                    <div class="row">
                        <div class="col-6 text-left" style="color: black; height: 20px;">
                            <span style="color:black ; font-weight:bold; margin-left: 10ch;">Motorcycle</span>
                        </div>
                        <div class="col-6 text-center">
                            <span style="color:navy; font-weight:bold;">P123</span>
                        </div>
                    </div>
                </div>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import NavbarTop from '../../../components/Navbar/NavbarTop.vue';
import TitleHeader from './TitleHeader.vue';

export default {
    name: "OrderDetails",
    data() {
        return {
            boxTwo: '',
        }
    },
    components: {
        NavbarTop,
        TitleHeader
    },
    methods: {
        showMsgBoxTwo() {
            this.boxTwo = ''
            this.$bvModal.msgBoxConfirm('Please confirm that you want to cancel your order.', {
                title: 'Confirmation',
                size: 'sm',
                buttonSize: 'sm',
                okVariant: 'danger',
                okTitle: 'YES',
                cancelTitle: 'NO',
                footerClass: 'p-2',
                hideHeaderClose: false,
                centered: true
            })

        },
        methods: {
            goToOngoing() {
                this.$router.push('/ongoing');
            }
        }
    }
}
</script>
<style scoped>
.toship-body {
    height: 100%;
    background-color: white;
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

.titleonea {
    background-color: #ffffff;
    padding: 1rem;
    color: rgb(8, 8, 8);
    padding-left: 2rem;
    width: 50rem;
    border: 1px solid rgb(156, 151, 151);
}

.titletwoa {
    background-color: #ffffff;
    padding: 1rem;
    color: rgb(4, 0, 0);
    padding-left: 2rem;
    width: 50rem;
    border: 1px solid rgb(156, 151, 151);

}

.titleoneb {
    background-color: rgb(224, 224, 238);
    padding: 0rem;
    color: rgb(8, 8, 8);
    padding-left: 1rem;
    width: 50rem;
    border: 1px solid rgb(156, 151, 151);
    text-align: left;
}

.titletwob {
    background-color: rgb(224, 224, 238);
    padding: 0rem;
    color: rgb(8, 8, 8);
    padding-left: 1rem;
    width: 50rem;
    border: 1px solid rgb(156, 151, 151);
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
</style>
