<template>
    <div class="routes-body">

        <center><br>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                <!--LOCATION FORM -->
                <div class="container titleone">
                    <div class="row">

                        <div class="col-auto col-lg-2 boxinput1">
                            <div class="inputstyle" id="input">
                                <h3><i class="fa-regular fa-circle"></i></h3>
                                <pre style="font-size:8px;"><b>|<br>|<br>|</b></pre>
                                <h3><i class="fa-solid fa-box"></i></h3>
                                <pre style="font-size:8px;"><b>|<br>|<br>|</b></pre>
                                <h3><i class="fa-solid fa-location-dot"></i></h3>
                            </div>
                        </div>

                        <div class="col boxinput2">
                            <br><br>
                            <b-form-group for="validationDefault01" id="input-group-1" label-for="input-1"
                                class="font-weight-bold text-primary inputloc">
                                <b-form-input id="input-1 validationDefault01" v-model="form.senderloc"
                                    placeholder="Sender's Location" required></b-form-input>
                            </b-form-group>
                            <br><br>
                            <b-form-group id="input-group-2" label-for="input-2" class="font-weight-bold text-primary inputloc">
                                <b-form-input id="input-2" v-model="form.recipientloc"
                                    placeholder="Recipient's Location" prepend="@" required></b-form-input>
                            </b-form-group>
                        </div>
                    </div>
                </div>
                <!-- LOCATION FORM -- END CODE -->

                <br><br><br><br>
                <div class="container titletwo">
                    <!-- VEHICLE TYPE DROPDOWN -->
                    <b-form-group id="input-group-3" label="WHOLE VEHICLE" label-for="input-3"
                        class="font-weight-bold">
                        <select class="form-select" aria-label="Default select example"
                            style="padding: 0.7rem; margin-top: 10px;">
                            <option selected>Choose Vehicle Type</option>
                            <option value="1">Closed Box</option>
                            <option value="2">Box</option>
                            <option value="3">Pallet</option>
                            <option value="4">Crate</option>
                            <option value="5">Other</option>
                        </select>
                    </b-form-group>
                    <!-- VEHICLE TYPE DROPDOWN -- END CODE -->

                    <br><br>

                    <!-- CARGO TYPE DROPDOWN -->
                    <b-form-group id="input-group-4" label="PARTIAL LOAD" label-for="input-4"
                        class="font-weight-bold">
                        <select class="form-select" aria-label="Default select example"
                            style="padding: 0.7rem; margin-top: 10px;">
                            <option selected>Choose Cargo Type</option>
                            <option value="1">Small Pickup</option>
                            <option value="2">Closed Van</option>
                            <option value="3">Pickup Truck</option>
                            <option value="4">6w Fwd Truck</option>
                        </select>
                    </b-form-group>
                </div>
                <!-- CARGO TYPE DROPDOWN -- END CODE -->


                <!-- LENGTH - WIDTH - HEIGHT - WEIGHT -->
                <form class="container d-flex justify-content-center dropdown">
                    <b-form-group id="input-group-5" label="Length" label-for="input-5"
                        class="font-weight-bold dropdown1">
                        <b-form-input id="input-5" v-model="form.L" placeholder="Length (cm)" required type="number">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-6" label="Width" label-for="input-6"
                        class="font-weight-bold dropdown1">
                        <b-form-input id="input-6" v-model="form.W" placeholder="Width (cm)" required type="number">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-7" label="Height" label-for="input-7" 
                        class="font-weight-bold dropdown1">
                        <b-form-input id="input-7" v-model="form.H" placeholder="Height (cm)" required type="number">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-8" label="Weight" label-for="input-8"
                        class="font-weight-bold dropdown1">
                        <b-form-input id="input-8" v-model="form.KG" placeholder="Weight (kg)" required type="number">
                        </b-form-input>
                    </b-form-group>
                </form>
                <!-- LENGTH - WIDTH - HEIGHT - WEIGHT -- END CODE -->

                
                <!-- ADD PACKAGE -->
                <!-- ADD PACKAGE 
                <p>
                <a href="#" class="addpackage"> <i class="fa-solid fa-circle-plus"></i> </a> Add another package
                </p>-->
                <AddPackage/>
                <br>
                <!-- END OF ADD PACKAGE CODE -->

                <!-- SET SCHEDULE -->
                <div class="container sched">
                    <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4"
                            :aria-describedby="ariaDescribedby">
                    <div class="row">

                        <div class="col sched1">
                            <br><br>
                            <h1><i class="fa-solid fa-bell"></i></h1>
                                Quick<br><br>
                            <pre><b-form-checkbox value="Earliest pickup within an hour"> ASAP - within 1 hour or less</b-form-checkbox></pre><br>
                        </div>

                        <div class="col sched1">
                            <br><br>
                            <h1><i class="fa-solid fa-calendar-days"></i></h1>
                                Schedule<br><br>
                                <pre><b-form-checkbox value="Set preferred date and time of delivery"> Set preferred date and time of delivery</b-form-checkbox></pre><br>
                        </div>
                    </div>
                    </b-form-checkbox-group>
                    </b-form-group>
                </div>
                <!-- SET SCHEDULE -- END CODE -->

                <br><br>

                <!-- NEXT AND RESET BUTTON -->
                <!-- <pre><b-button pill v-b-modal.modal-lg type="submit" variant="warning font-weight-bold">    NEXT    </b-button>    <b-button pill type="reset" variant="warning font-weight-bold">   RESET   </b-button></pre> -->
                <div class="button">
                    <b-button pill type="submit" class="btn-custom" href="/details">NEXT</b-button>
                    <b-button pill type="reset" class="btn-custom">RESET</b-button>
                    
                </div>
                
                <!--MODAL
                <b-modal id="modal-lg" size="lg" title="YOUR ECONOMY PRICE" hide-footer>
                    <pre class="text-center"><h2 class="font-weight-bold">Php {{ form.price }}</h2> </pre>
                    <pre class="m-0"><h5>       Vehicle Type : {{ form.vehicletype }}</h5></pre>
                    <pre class="m-0"><h5>       Pickup       : {{ form.senderloc }}</h5></pre>
                    <pre class="m-0"><h5>       Destination  : {{ form.recipientloc }}</h5></pre>
                    <pre class="m-0"><h5>       Distance     : {{ form.distance }}</h5></pre>
                    <pre class="m-0"><h5>       Duration     : {{ form.duration }}</h5></pre>
                    <pre class="m-0"><h5>       Inclusions   : {{ form.cargotype }}</h5></pre>
                    <pre class="m-0"><h5>       Available    : {{ form.checked }}</h5></pre>
                    <br><br>
                    <pre
                        class="text-center"><b-button pill @click="$bvModal.hide('modal-lg')" variant="secondary font-weight-bold">    CLOSE    </b-button>    <b-button pill href="/details" variant="primary font-weight-bold">   BOOK NOW   </b-button></pre>
                </b-modal>
                 NEXT AND RESET BUTTON -- END CODE -->



            </b-form>
        </center>
        
    </div>
</template>


<script>
import AddPackage from './AddPackage.vue';

  export default {
    Name: "RoutePanel",
    data() {
        return {
            form: {
                L: "",
                W: "",
                H: "",
                KG: "",
                cargotype: null,
                vehicletype: null,
                checked: "",
            },
            vehicletype: [{ text: "Choose Vehicle Type", value: null }, "Closed Box", "Box", "Pallet", "Crate", "Other"],
            cargotype: [{ text: "Choose Cargo Type", value: null }, "Small Pickup", "Closed Van", "Pickup Truck", "6w Fwd Truck"],
            show: true
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.senderloc = "";
            this.form.recipientloc = "";
            this.form.L = "";
            this.form.W = "";
            this.form.H = "";
            this.form.KG = "";
            this.form.vehicletype = null;
            this.form.cargotype = null;
            this.form.checked = "";
            // Trick to reset/clear native browser form validation state
            this.show = false;
            this.$nextTick(() => {
                this.show = true;
            });
        }
    },
    components: { AddPackage }
}
</script>


<style scoped>
p{
    color: #003060;
    font-family: 'Poppins','sans-serif';
    font-size: 20px;
}
h1{
    font-size: 5rem;
}
pre {
    font-size: 20px;
}
.boxinput1 {
    color: #FBCD10;
}

.titleone{
    background-color: #003060;
    padding: 3rem;
    color: white;
    padding-left: 1rem;
    width: 50rem;
    height:20rem;
    border-radius: 3rem;
    box-shadow: 2px 10px 10px 2px rgba(0, 0, 0, 0.4);
}
.titletwo{
    background-color: white;
    width: 50rem;
    height:20rem;
    font-weight:bold;
    color: #003060;
    font-size: 20px;
}
.routes-body{
    padding-bottom: 50px;
    padding-top: 50px;
}
.dropdown .dropdown1{
    font-weight:bold;
    color: #003060;
    width: 18rem;
    font-size: 20px;
}
.button{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 40px;
}
.btn-custom{
    width: 125px;
    background: #FBCD10;
    color: black;
    font-family: 'Poppins','sans-serif';
    font-size: 20px;
    box-shadow: 0px 3px 10px 1px gray;
}
.btn-custom:hover{
    background: #ffae00;
    color: rgb(255, 255, 255);
}
.sched .sched1{
    background-color: #003060;
    outline: auto;
    color: white;
    align-items: center;
    width: 50%;
}

@media (max-width:500px) {
    .titleone{
    background-color: #003060;
    padding-top: 1px;
    padding-right: 2rem;
    width: 21rem;
    height:20rem;
    border-radius: 4rem;
    }

    .titleone .boxinput1{
        padding-right: 0rem;
        padding-left: 2rem;
        padding-top: 3rem; 
    }
    .titleone .boxinput2{
        padding-right: 1rem;
        padding-left: 2rem;
        padding-top: 3rem;
    }
    .titleone .boxinput .inputloc{
        padding-right: 2rem;
        width: 12rem;
    }
    .titletwo{
    background-color: white;
    width: 20rem;
    height:18rem;
    }
    .dropdown{
    background-color: white;
    padding: 1rem;
    }
    .dropdown .dropdown1{
    padding: 1px;
    width: 100%;
    }

    .sched{
    background-color: white;
    padding: 1rem; 
    }
    pre {
    font-size: 10px;
    }
    .btn-custom{
    width: 100px;
    font-size: 15px;
    }

}

</style>
