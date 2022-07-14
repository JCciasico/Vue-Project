<template>
    <b-row>
        <nav class="navbar navbar-expand-lg navbar-light menu">
            <div class="container-fluid title">
                <h2 id="Orders">Orders</h2>
                <div>
                    <b-form class="nosubmit">
                        <input class="nosubmit" type="search" placeholder="Search all orders">
                    </b-form>
                </div>
            </div>
        </nav>
    </b-row>
</template>

<script>
export default {
    name: 'TitleHeader',
}
</script>

<style scoped>
.title {
    background-color: #003060;
    padding: 1rem;
    color: white;
    padding-left: 3rem;
}

.pull-right {
    padding-right: 20px;
    align-items: right;
    margin: 0 auto;

}

form.nosubmit {
    border: none;
    padding: 0;
}

input.nosubmit {
    border: 1px solid #555;
    width: 25em;
    height: 40px;
    padding: 9px 4px 9px 40px;
    background: rgb(186, 212, 227) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat 13px center;
    border-radius: 30px;
    float: right;
    outline: none;
    transition: .3s;
}

@media (max-width:700px) {
    /* .title {
        width: 25rem;
    } */

    .pull-right {
        width: 15rem;
    }

    .b-form {
        width: 10rem;
    }

    input.nosubmit {
        width: 10em;
    }
}
</style>
