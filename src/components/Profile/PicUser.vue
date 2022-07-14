<template>

    <div id="BodyUser">
        <!-- profile -->
        <label for="file"><i class="fa-solid fa-circle-user"></i></label>
        
        <div class="row text-center">
            <div class="col-lg-12 d-flex justify-content-center align-items-center profile">
                <span id="comp-name">{{company}}</span>
                <input type="file" id="file" style="display:none;">
                <a href="#" v-b-modal.modal-custom-name><i class="fa-solid fa-pen-to-square"></i></a>
            </div>
        </div>
        <!-- profile end -->
        <div>
            <NameModal :company="company" />
        </div>

    </div>

</template>

<script>
import NameModal from './NameModal.vue';
import axios from 'axios';


export default {
    name: 'BodyUser',
     components:{
        NameModal,
     },
     data(){
        return{
            company: 'ABC Hardware',
        }
     },
    mounted() {
        this.getName()
    },
    methods: {
        async getName() {
            await axios.get('/verification').then((res) => {
                console.log(res)
            })
        }
    }
     

}
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");

.fa-circle-user {
    width: 275px;
    height: 275px;
    color: #0D7CFF;
    margin-bottom: 10px;
}
#profile-pic{
    cursor: pointer;
}
.fa-circle-user:hover{
    opacity: 0.7;
    cursor: pointer;
}

#comp-name {
    font-family: 'Poppins', 'sans-serif';
    font-size: 1.3rem;
}

.profile {
    column-gap: 15px;
}

.fa-pen-to-square {
    font-size: 30px;
    color: #FFC000;
}
.fa-pen-to-square:hover{
    color: #0D7CFF;
}
@media (max-width:1200px) {
    .fa-circle-user {
        width: 225px;
        height: 225px;
    }
}
@media (max-width:800px) {
    .fa-circle-user {
        width: 200px;
        height: 200px;
    }
}

@media (max-width:550px) {
    #comp-name {
        font-family: 'Poppins', 'sans-serif';
        font-size: 1rem;
    }
}

@media (max-width:500px) {
    #comp-name {
        font-family: 'Poppins', 'sans-serif';
        font-size: 1rem;
    }
}

@media (max-width:500px) {
    #comp-name {
        font-family: 'Poppins', 'sans-serif';
        font-size: 1rem;
    }

    .fa-circle-user {
        width: 175px;
        height: 175px;
    }

    .bi-camera {
        font-size: 30px;
    }

    .profile {
        display: block;
    }

}

@media(max-width:350px) {
    .fa-circle-user {
        width: 150px;
        height: 150px;
    }
}
</style>