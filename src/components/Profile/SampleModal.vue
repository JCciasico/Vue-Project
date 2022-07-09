<template>
    <div id="myform">
        <h1>form validation</h1>
        <form action="" @submit.prevent="submitForm" autocomplete="off">
        <div class="form-group">
            <label for="name">Name:</label>
            <input v-model="form.name" id="name">
            <p v-if="!nameisvalid">the name field is required</p>
        </div>
        <div class="form-group">
            <label for="contact">Contact:</label>
            <input v-model.number="form.contact" id="contact">
            <p v-if="!contactisvalid">the contact field is required</p>
        </div>
        <div class="form-group">
            <button :disabled="!formisvalid">submit</button>
        </div>


        </form>
    </div>
</template>

<script>

export default {

    data(){
        return{
            form:{
                name:null,
                contact:null
            }
        }
    },
    computed:{
        nameisvalid(){
            return !!this.form.name
        },
        contactisvalid(){
            return typeof this.form.contact === 'number' && this.form.contact > 10000000000
        },
        formisvalid(){
            return this.nameisvalid && this.contactisvalid
        }
    },
    methods:{
        submitForm(){
            if(this.formisvalid){
                console.log('Form submitted', this.form);
            }else{
                console.log('invalid form')
            }
        }
    }
   

}
</script>

<style>

</style>