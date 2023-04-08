<script setup>
let shoppingCard = JSON.parse(sessionStorage.getItem('shoppingCard'));
const Today = new Date().toDateString();


</script>

<template>
    <h1>Purchesed</h1>
    <table class="table table-bordered table-striped table-hover tb">
        <thead>
            <tr>
                <th>Product</th>
                <th>Price($)</th>
                <th>Date</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in shoppingCard">
                <td>{{ product.title }}</td>
                <td>{{ product.price }}</td>
                <td>{{ Today }}</td>
                <td>{{ product.category }}</td>
            </tr>
        </tbody>


    </table>



    <div class="divider">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Count</th>
                    <th>Total Price($)</th>
                    <th>Date</th>
                    <th>Customer</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ shoppingCard.length }}</td>
                    <td>{{ shoppingCard.reduce((pv, cv) => {
                        pv += cv.price;
                        return pv;
                    }, 0) }}</td>
                    <td>{{ Today }}</td>
                    <td>{{ }}</td>
                </tr>

            </tbody>

        </table>
    </div>
</template>


<style scoped>
* {
    text-align: center;
}

.tb {
    text-align: start;
    margin: 2% 20%;
    max-width: 55%;
}

.divider {
    margin: 2% 20%;
    border-top: 3px solid black;
}

@media (max-width:800px) {
    .tb {
        text-align: start;
        margin: 2% 10%;

    }

    .divider {
        margin: 4% 5%;
        border-top: 3px solid black;
    }

}
</style>