<template>
    <div>
        <div class="container-fluid title d-flex justify-content-between align-items-center">
            <h3 id="help-center">Help Center</h3>
            <div class="d-flex align-items-center mail">
                <h5 id="concern-title">Tell us your concerns</h5>
                <a v-b-modal.modal-custom-concern class="envelope"><i class="fa-solid fa-envelope"></i></a>
            </div>
        </div>
        <ConcernModal/>
    </div>
</template>

<script>
import ConcernModal from './ConcernModal.vue'
export default{
    name: 'TitleHeader',
    components:{
        ConcernModal
    }
}
</script>

<style scoped>
.title{
    background-color: #003060;
    padding: 1rem;
    color: white;
    padding-left: 3rem;
}
.mail{
    column-gap: 10px;
    margin-right: 15px;
}
.envelope{
    font-size: 2em;
    color: #FBCD10;
    margin-top: -5px;
}
.envelope:hover{
    color: #0D7CFF;
}
#concern-title{
    color: #FBCD10;
}
@media(max-width:500px){
    #help-center{
        font-size: 1.2rem;
    }
    .title{
        padding: 1rem;
    }
    h5{
        font-size: 1rem;
    }
    .envelope{
    font-size: 1.5em;
    margin-top: -5px;
    }
    .mail{
    margin-right: 0px;
    }
}
@media(max-width:400px){
    #concern-title{
        font-size: 0.7rem;
    }
}
@media(max-width:350px){
    #concern-title{
        display: none;
    }
}

</style>