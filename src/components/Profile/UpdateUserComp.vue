<template>
    <div>
        <!-- box 1 -->
        <div class="row box">
            <div class="col-2 d-flex justify-content-center align-items-center">
                <i id="icon" class="bi bi-person icon"></i>
            </div>
            <div class="col-8 d-flex align-items-center box-line">
                <div class="row">
                    <span class="profile-insert">Name</span>
                    <span class="details">{{firstname}} {{lastname}}</span>
                </div>
            </div>
            <div class="col-2 d-flex justify-content-center align-items-center">
                <a href="#" v-b-modal.modal-custom-1><i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </div>
        <!-- end box 1 -->

        <!-- box 2 -->
        <div class="row box">
            <div class="col-2 d-flex justify-content-center align-items-center">
                <i class="bi bi-info-circle icon"></i>
            </div>
            <div class="col-8 d-flex align-items-center">
                <div class="row about">
                    <span class="profile-insert box-line">About</span>
                    <p id="about">{{compabout}}</p>

                </div>
            </div>
            <div class="col-2 d-flex justify-content-center align-items-center">
                <a href="#" v-b-modal.modal-custom-1><i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </div>
        <!-- end box 2 -->

        <!-- box 3 -->
        <div class="row box">
            <div class="col-2 d-flex justify-content-center align-items-center">
                <i class="bi bi-telephone icon"></i>
            </div>
            <div class="col-8 d-flex align-items-center box-line">
                <div class="row">
                    <span class="profile-insert">Contact Number</span>
                    <span class="details">(+63){{compcontact}}</span>
                </div>
            </div>
            <div class="col-2 d-flex justify-content-center align-items-center">
                <a href="#" v-b-modal.modal-custom-1><i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </div>
        <!-- end box 3 -->

        <!-- box 4 -->
        <div class="row box-1">
            <div class="col-2 d-flex justify-content-center align-items-center">
                <i class="bi bi-envelope icon"></i>
            </div>
            <div class="col-8 d-flex align-items-center box-line">
                <div class="row">
                    <span class="profile-insert">Email</span>
                    <span class="details">{{compemail}}</span>
                </div>
            </div>
            <div class="col-2 d-flex justify-content-center align-items-center">
                <a href="#" v-b-modal.modal-custom-1><i class="fa-solid fa-chevron-right"></i></a>
            </div>
        </div>
        <!-- end box 4 -->
        <div>
            <UserModal :firstname="firstname" :lastname="lastname" :compabout="compabout" :compcontact="compcontact"
                :compemail="compemail" />
        </div>
    </div>
</template>

<script>
import UserModal from './UserModal.vue';

export default {
     name: 'UpdateUserComp',
     data() {
         return {
            firstname: 'abchardware',
            lastname: 'official',
            compabout: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.l',
            compcontact: 9123456789,
            compemail: 'johndelacruz@gmail.com',
         }
    },
     components:{
        UserModal,
     },
     
}
</script>

<style scoped>
.box {
    height: 120px;
    border-bottom: 1px solid black;
}

.box-1 {
    height: 120px;
}

.box-line {
    padding: 5px;
    line-height: 35px;
}

#about::-webkit-scrollbar {
    display: none;
    /* hide scroll bar for chrome,safari and Opera */
}

#about {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}

#about {
    overflow: auto;
    width: 100%;
    height: 50px;
    font-size: 1rem;
    font-family: 'Poppins', 'sans-serif';
}

.details {
    font-family: 'Poppins', 'sans-serif';
    font-size: 1.1rem;
}

.icon {
    font-size: 30px;
    color: #FFC000;
}

#icon {
    font-size: 35px;
    color: #FFC000;
}

.profile-insert {
    font-size: 1.4rem;
}
.fa-chevron-right{
    font-size:25px; 
    color:#0D7CFF;
}
.fa-chevron-right:hover{
    color: #FFC000;
}
@media (max-width:1200px) {
    .details {
        font-size: 1rem;
    }
}
@media (max-width:600px) {
    .details {
        font-size: 1rem;
    }
}

@media (max-width:460px) {
    .details {
        font-size: 0.8rem;
    }

    #about {
        font-size: 0.8rem;
        font-family: 'Poppins', 'sans-serif';
    }

    .icon {
        font-size: 25px;
    }
    #icon{
        font-size: 30px;
    }

    .profile-insert {
        font-size: 1rem;
    }

    .box-line {
        padding: 5px;
        line-height: 25px;
    }

}

@media(max-width:300px) {
    .details {
        font-size: 0.7rem;
    }
    #about{
        font-size: 0.6em;
    }

    .icon {
        font-size: 20px;
    }
    #icon{
        font-size: 25px;
    }
}
</style>