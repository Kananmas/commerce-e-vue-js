<script>
import Card from "../../components/Card/index.vue"


export default {
    data() {
        return {
            products: [],
            isFetched: false,
            max: 2,
            url: 'https://fakestoreapi.com/products',
        }
    },
    mounted() {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(res => {
            console.log(res);
            this.products = res;
            this.isFetched = true;
        })
    },
    components: {
        Card,
    }
}
</script>

<template>
    <div class="sales" v-if="isFetched">
        <Card class-name="my-2" v-for="product in products" :title="product.title" :text="product.description"
            :price="product.price" :img="[, , , , product.image]" :rating="product.rating.rate" :product="product" />
    </div>
</template>


<style scoped>
.sales {
    margin: 0% 12%;
}

.card {
    width: 450px;
    height: 450px;
    float: left;
    margin-left: 2%;
}

@media (max-width:800px) {
    .sales {
        margin: 0% 2%;
    }

    .card {
        width: auto;
        height: auto;
        margin-left: 1%;
    }

}
</style>