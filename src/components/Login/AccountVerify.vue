<template>
    <div class="verify-body">
        <div class="custom-verify">
            <h1 class="text-center">Account Verification</h1>
            <form action="" class="custom-form">
                <label for="identification" style="color: gray;">
                    Proof of Identification <span>*</span>
                </label>
                <select class="form-select" aria-label="Default select example">
                    <option selected hidden>Choose Government-Issued ID Type</option>
                    <option value="1">Driver's License</option>
                    <option value="2">OFW ID</option>
                    <option value="3">PhilHealth</option>
                    <option value="4">PhilSys ID</option>
                    <option value="5">Postal ID</option>
                    <option value="6">PRC ID</option>
                    <option value="7">SSS</option>
                    <option value="8">UMID</option>
                    <option value="9">Alien Certificate of Registration</option>
                </select>
                <div class="row">
                    <div class="col-6">
                        <label for="id-photo" style="color: gray;">Photo of your ID Card <span>*</span></label>
                        <div class="id-photo d-flex align-items-center">
                            <div class="input-group-prepend">
                                <span class="input-group-text" style="height:40px" id="basic-addon1"><i class="fa-solid fa-camera"></i></span>
                            </div>
                            <input type="text" class="form-control" aria-label="File"
                                aria-describedby="basic-addon1">
                            <input type="file" hidden>
                        </div>
                    </div>
                    <div class="col-6"></div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "AccountVerify",
    data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>

<style scoped>


.verify-body{
    background-color: blue;
    height: 100vh;
    background: linear-gradient(to bottom right,
                #280eb8,
                #3352db,
                #4c9cca,
                rgb(79, 135, 187));
    display: flex;
    align-items: center;
    justify-content: center;
}
.custom-verify{
    background-color: white;
    width: 800px;
    border-radius: 25px;
    padding: 2em;
}
h1{
    font-weight: bold;
    margin-bottom: 25px;
}
.custom-form{
    padding-left: 5em;
    padding-right: 5em;
}
.form-select{
    height: 45px;
    border-radius: 25px;
    padding-left: 30px;
    background-color: #f1f2f6;
    box-shadow: 0px 2px 1px 1px #ced6e0;
    border: 1px solid #dfe4ea;
    color: gray;
    margin-bottom: 10px;
}

</style>