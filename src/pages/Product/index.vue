<script setup>
import Card from "../../components/Card/index.vue"
import { ref } from "vue";

let  product = null;

if (!product) {
    const stored = sessionStorage.getItem("product");
    if (!!stored) {
        product = JSON.parse(stored);
    }
}
const { title, description, price, images } = product;

let otherProducts = ref([]);
fetch("https://dummyjson.com/products/category/" + product.category).then(res => res.json()).then(res => {
    otherProducts.value = res.products.filter((Cproduct) => Cproduct.title !== product.title);
});

</script>

<template>
    <div v-if="product" class="product-slot">
        <img :src="images[0]" />
        <h1>{{ title }}</h1>
        <p>{{ description }} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia culpa itaque ullam
            nihil dignissimos corporis laborum quibusdam unde, totam quasi eum officia quidem earum sunt, cupiditate, beatae
            soluta facilis.</p>
        <kbd>Rating: {{ product.rating }}</kbd>
        <h5>Price: {{ price }}$</h5>
    </div>
    <div class="other-products">
        <h4>See Also</h4>
        <Card v-for="product in otherProducts" :rating="product.rating" :price="product.price" :title="product.title"
            :img="product.images[4]" :text="product.description" :product="product" />
    </div>
</template>


<style scoped>

@media (max-width: 800px) {
    img {
    max-width: 400px;
}

.product-slot {
    padding: 2%;
}

.other-products {
    margin-top: 12%;
    border-top: 3px solid black;
}

.other-products h4 {
    text-align: center;
    margin-top: 4%;
}

.card {
    padding: 2%;
    margin: 2%;
}

p {
    border: 1px solid silver;
    padding: 4%;
    border-radius: 13px;
}

h1 {
    border-bottom: 3px solid black;
    padding: 1%;
}

kbd {
    float: left;
    display: inline;
}

h5 {
    float: left;
    margin-left: 14px;
}

}

</style>