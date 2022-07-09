<template>
    <div class="help-footer">
        <div class="container-fluid">          
            <div class="row help-body">
                <div class="col box">
                    <i class="fa-solid fa-circle-info icon"></i>
                    <h5 id="cat-item">About</h5>
                </div>
                <div class="col box">
                    <i class="fa-solid fa-user icon user"></i>
                    <h5 id="cat-item">Accounts</h5>
                </div>
                <div class="col box">
                    <i class="fa-solid fa-file-lines icon"></i>
                    <h5 id="cat-item">Partnership</h5>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.help-body{
    background-color: yellow;
    box-shadow: 0px 3px 10px 1px gray;
    height: 50px;
}
.icon{
    font-size: 1.7em;
    color: #0D7CFF;
}
.user{
    font-size: 1.5em;
}

.box{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 15px;
    cursor: pointer;
}
.box:hover{
    background-color: #0D7CFF;
    color: white;
}
.box:hover .icon{
    color: white;
}
#cat-item{
    margin-bottom: 0px;
}
@media(max-width:700px){
  .icon{
    font-size: 1.3em;
  }
  .user{
    font-size: 1.1em;
}
  #cat-item{
    font-size: 1rem;
  }
}
@media(max-width:500px){
    
    #cat-item {
        font-size: 0.8rem;
    }
    .box{
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10px;
    }
}
@media(max-width:350px){
    #cat-item {
        font-size: 0.8rem;
    }
}

</style>