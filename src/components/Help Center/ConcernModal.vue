<template>
  <div>
        <!-- modal username -->
        <b-modal id="modal-custom-concern" ref="modal" title="How can we help you?" button-size="md" centered hide-header-close
            no-close-on-backdrop header-class="justify-content-center">
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <div class="container-fluid custom-input" style="width:90%">
                    <b-form-group label-for="name-input">
                        <label for="comp-name" style="margin-left:10px">Details</label>
                        <b-form-textarea id="comp-name" v-model="form.companyname"
                            style="border-radius: 25px; margin-top: 10px; height: 100px; box-shadow: 0px 1px 1px 1px #ced6e0;" placeholder="Please tell us your concern.">
                        </b-form-textarea>
                    </b-form-group>
                </div>
            </form>
            <template #modal-footer>
                <div class="w-100 d-flex justify-content-center align-items-center" style="column-gap: 25px">
                    <b-button size="md" @click="$bvModal.hide('modal-custom-concern')" style="width:100px; border-radius:15px; background-color: white; color:#BC9476; box-shadow: 0px 1px 1px 1px #ced6e0; border:none;">
                        Back
                    </b-button>
                    <b-button size="md" @click="$bvModal.hide('modal-custom-concern')" style="width:100px; border-radius:10px; background-color: #FFC000; color:white; border:none; box-shadow: 0px 1px 1px 1px #ced6e0; ">
                        Send
                    </b-button>
                </div>
            </template>
        </b-modal>
        <!-- modal username end -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            form:{
                companyname: this.company
            }
        }
    },

    computed:{
        compnameisvalid(){
            return !!this.form.companyname
        },
        formisvalid(){
            return this.compnameisvalid 
        },
        
    },
    methods:{
        submitForm(){
            if(this.formisvalid){
                return false;
            }else{
                console.log('invalid form')
            }
        }
    },
    props:{
        company:String
    }

}
</script>

<style scoped>

</style>