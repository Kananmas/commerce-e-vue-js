<script setup>
import Card from "../../components/Card/index.vue"
import { fetchFrom } from "../../components/Vitrine/utils/fech-from.utils";
import { ref } from "vue";

let product = null;

if (!product) {
    const stored = sessionStorage.getItem("product");
    if (!!stored) {
        product = JSON.parse(stored);
    }
}
const { title, description, price } = product;

let otherProducts = ref([]);

if (product.images) {
    fetchFrom("https://dummyjson.com/products/category/" + product.category, res => {
        otherProducts.value = res.products.filter((Cproduct) => Cproduct.title !== product.title);
    });
}

else {
    fetchFrom(`https://fakestoreapi.com/products/category/${product.category}`, res => {
        res.forEach(i => {
            const img = i.image;
            delete i.image;
            i.images = [, , , , img];
            i.rating = i.rating.rate;
        })
        otherProducts.value = res.filter((Cproduct) => Cproduct.title !== product.title);
    });
}

function handleClickAddToShoppingCard() {
    let shoppingCard = sessionStorage.getItem('shoppingCard');

    if (!shoppingCard) {
        shoppingCard = [];
    }
    else {
        shoppingCard = JSON.parse(shoppingCard);
    }
    shoppingCard.push(product);
    sessionStorage.setItem('shoppingCard', JSON.stringify(shoppingCard));
}


function findImage(product) {
    if (!product.images) {
        return product.image;
    }
    return product.images[0]
}

function getRating(product) {
    if (typeof product.rating == 'object') {
        return product.rating.rate;
    }
    return product.rating;
}

</script>

<template>
    <div v-if="product" class="product-slot">
        <img :src="findImage(product)" />
        <div class="text-content">
            <h1>{{ title }}</h1>
            <p>{{ description }} Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam mollitia culpa itaque
                ullam
                nihil dignissimos corporis laborum quibusdam unde, totam quasi eum officia quidem earum sunt, cupiditate,
                beatae
                soluta facilis.</p>
            <kbd>Rating: {{ getRating(product) }}</kbd>
            <h5>Price: {{ price }}$</h5>

            <button class="btn btn-success" @click="handleClickAddToShoppingCard">Add To Shoping Card</button>
        </div>

    </div>
    <div class="other-products">
        <h4>See Also</h4>
        <Card v-for="product in otherProducts" :rating="product.rating" :price="product.price" :title="product.title"
            :img="product.images[4]" :text="product.description" :product="product" />
    </div>
</template>


<style scoped>
.card {
    width: 500px;
    float: left;
    margin: 0 3rem;
}

.card img {
    width: 200px;
    height: 200px;
}

.text-content {
    margin-left: 4%;
    margin-top: 2%;
    width: 800px;
    float: left;
}

.product-slot {
    height: 50vh;
}

.product-slot img {
    float: left;
    width: 300px;
    height: 400px;
}

.other-products {
    padding: 2%;
    margin-top: 2%;
    border-top: 3px solid black;
}

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