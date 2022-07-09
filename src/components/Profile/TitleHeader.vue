<template>
    <div class="container-fluid title">
        <h3 id="company-profile">Company Profile</h3>
    </div>
</template>

<script>
export default{
    name: 'TitleHeader',
}
</script>

<style scoped>
.title{
    background-color: #003060;
    padding: 1rem;
    color: white;
    padding-left: 3rem;
}
@media(max-width:500px){
    #company-profile{
        font-size: 1.2rem;
    }
    .title{
        text-align: center;
        padding: 1rem;
    }
}

</style>