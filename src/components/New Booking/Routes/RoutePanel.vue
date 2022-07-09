<template>
    <div class="routes-body">

        <center><br>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">

                <!--LOCATION FORM -->
                <div class="container titleone">
                    <div class="row">

                        <div class="col col-lg-2">
                            <div class="inputstyle" id="input">
                                <h3 style="color:yellow;"><i class="fa-regular fa-circle"></i></h3>
                                <pre style="font-size:8px;color:grey;"><b>|<br>|<br>|</b></pre>
                                <h3 style="color:yellow;"><i class="fa-solid fa-box"></i></h3>
                                <pre style="font-size:8px;color:grey;"><b>|<br>|<br>|</b></pre>
                                <h3 style="color:yellow;"><i class="fa-solid fa-location-dot"></i></h3>
                            </div>
                        </div>

                        <div class="col">
                            <br><br>
                            <b-form-group for="validationDefault01" id="input-group-1" label-for="input-1"
                                class="font-weight-bold text-primary">
                                <b-form-input id="input-1 validationDefault01" v-model="form.senderloc"
                                    placeholder="Sender's Location" required></b-form-input>
                            </b-form-group>
                            <br><br>
                            <b-form-group id="input-group-2" label-for="input-2" class="font-weight-bold text-primary">
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
                        class="font-weight-bold text-primary">
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
                        class="font-weight-bold text-primary">
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
                <form class="d-inline-flex">
                    <b-form-group id="input-group-5" label="Length" label-for="input-5"
                        class="font-weight-bold text-primary">
                        <b-form-input id="input-5" v-model="form.L" placeholder="Length (cm)" required type="number">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-6" label="Width" label-for="input-6"
                        class="font-weight-bold text-primary">
                        <b-form-input id="input-6" v-model="form.W" placeholder="Width (cm)" required type="number">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-7" label="Height" label-for="input-7"
                        class="font-weight-bold text-primary">
                        <b-form-input id="input-7" v-model="form.H" placeholder="Height (cm)" required type="number">
                        </b-form-input>
                    </b-form-group>

                    <b-form-group id="input-group-8" label="Weight" label-for="input-8"
                        class="font-weight-bold text-primary">
                        <b-form-input id="input-8" v-model="form.KG" placeholder="Weight (kg)" required type="number">
                        </b-form-input>
                    </b-form-group>
                </form>
                <!-- LENGTH - WIDTH - HEIGHT - WEIGHT -- END CODE -->

                <br><br>

                <!-- ADD PACKAGE -->
                <p>+ Add another package</p>
                <!-- END OF ADD PACKAGE CODE -->

                <!-- SET SCHEDULE -->
                <div>
                    <b-form-group id="input-group-6" v-slot="{ ariaDescribedby }">
                        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4"
                            :aria-describedby="ariaDescribedby">
                            <!-- SET SCHEDULE BUTTON -->
                            <div class="mt-3">
                                <b-button-group size="lg">
                                    <!-- QUICK PART -->
                                    <b-button class="bg-primary p-2 text-light"><br>
                                        <h1><i class="fa-solid fa-bell"></i></h1>
                                        Quick<br><br>
                                        <b-form-checkbox value="Earliest pickup within an hour"> ASAP - within 1 hour or
                                            less</b-form-checkbox>
                                    </b-button>
                                    <!-- SCHEDULE PART-->
                                    <b-button class="bg-primary p-2 text-light"><br>
                                        <h1><i class="fa-solid fa-calendar-days"></i></h1>
                                        Schedule<br><br>
                                        <b-form-checkbox value="Set preferred date and time of delivery">Set preferred
                                            date and time of delivery</b-form-checkbox>
                                    </b-button>
                                </b-button-group>
                            </div>
                        </b-form-checkbox-group>
                    </b-form-group>
                </div>
                <!-- SET SCHEDULE -- END CODE -->

                <br><br>

                <!-- NEXT AND RESET BUTTON -->
                <!-- <pre><b-button pill v-b-modal.modal-lg type="submit" variant="warning font-weight-bold">    NEXT    </b-button>    <b-button pill type="reset" variant="warning font-weight-bold">   RESET   </b-button></pre> -->
                <div class="button">
                    <b-button pill type="submit" v-b-modal.modal-lg class="btn-custom" variant="warning">NEXT</b-button>
                    <b-button pill type="reset" class="btn-custom" variant="warning">RESET</b-button>
                </div>
                
                <!--MODAL-->
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
                <!-- NEXT AND RESET BUTTON -- END CODE -->



            </b-form>
        </center>
    </div>
</template>


<script>

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
}
</script>


<style scoped>
p{
    color: blue;
    font-family: 'Poppins','sans-serif';
    font-size: 1rem;
}
.titleone{
    background-color: #054b91;
    padding: 3rem;
    color: white;
    padding-left: 1rem;
    width: 50rem;
    height:20rem;
    border-radius: 3rem;
}
.titletwo{
    background-color: white;
    width: 50rem;
    height:20rem;
    
}
.routes-body{
    padding-bottom: 50px;
    padding-top: 50px;
}
.button{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 25px;
}
.btn-custom{
    width: 125px;
}
</style>
