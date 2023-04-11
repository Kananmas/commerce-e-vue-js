<script setup>
import Card from "../../components/Card/index.vue";
import ListGroup from "./components/ListGroup/index.vue";
import ListGroupItem from "./components/ListGroupItem/index.vue";
import { fetchFrom } from "../../utils/fech-from.utils";
import { ref, watch, onMounted } from "vue";

let product = ref(JSON.parse(sessionStorage.getItem("product")));

let otherProducts = ref(JSON.parse(sessionStorage.getItem("otherProducts")));

let showingPorducts = otherProducts.value.filter(
  (pro) => pro.title !== product.value.title && product.value.category === pro.category
);

function findImage(product) {
  if (product.images) {
    return product.images[4];
  }
  return product.image;
}

function getRating(product) {
  if (typeof product["rating"] == "object") {
    return product["rating"].rate;
  } else {
    return product["rating"];
  }
}

function handleClickAddToShoppingCard() {
  let boughtProducts = sessionStorage.getItem("shoppingCard")
  let shoppingCard = [];

  if (!!!boughtProducts) {
    shoppigCard = JSON.parse(boughtProducts);
  }

  shoppingCard.push(product.value);
  sessionStorage.setItem("shoppingCard", JSON.stringify(shoppingCard));
}

function goToProduct(newProduct) {
  product.value = newProduct;
  showingPorducts = otherProducts.value.filter(
    (pro) => pro.title !== newProduct.title && newProduct.category === pro.category
  );
}
</script>

<template>
  <div v-if="product" class="product-slot">
    <img :src="findImage(product)" />
    <div class="text-content">
      <h1>{{ product.title }}</h1>
      <p>
        {{ product.description }} Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Magnam mollitia culpa itaque ullam nihil dignissimos corporis laborum
        quibusdam unde, totam quasi eum officia quidem earum sunt, cupiditate, beatae
        soluta facilis.
      </p>
      <button class="btn btn-success" @click="handleClickAddToShoppingCard">
        Add To Shoping Card
      </button>
    </div>
    <div class="rating-display">
      <kbd>Rating: {{ getRating(product) + `⭐` }}</kbd>
      <h5>Price: {{ product.price }}$</h5>
    </div>

    <ListGroup>
      <ListGroupItem title="Rating:" :value="getRating(product) + `⭐`" />
      <ListGroupItem title="Price:" :value="product.price+`$`" />
      <ListGroupItem title="Category:" :value="product.category" />
      <ListGroupItem title="Discount:" :value="product.discountPercentage || 0" />
    </ListGroup>
  </div>
  <div class="other-products">
    <h4>See Also</h4>
    <div class="cards">
      <Card
        v-for="product in showingPorducts"
        :rating="getRating(product)"
        :price="product.price"
        :title="product.title"
        :img="findImage(product)"
        :text="product.description"
        :product="product"
        @go-to-products="goToProduct(product)"
      />
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 801px) {
  .card {
    display: inline;
    width: 500px;
    height: fit-content;
    float: left;
    margin: 0 1rem;
  }

  .rating-display {
    display: none;
  }

  .cards {
    display: flex;
  }

  .card img {
    width: 200px;
    height: 200px;
  }

  .text-content {
    margin: 2% 4%;
    width: 800px;
    float: left;
  }

  .product-slot {
    height: 50vh;
  }

  .product-slot img {
    margin-left: 4%;
    float: left;
    width: 300px;
    height: 400px;
  }

  .other-products {
    padding: 2%;
    margin-top: 2%;
    border-top: 3px solid black;
  }

  .other-products h4 {
    margin-bottom: 2%;
  }
}

@media (max-width: 800px) {
  img {
    max-width: 350px;
  }

  .card {
    display: block;
  }

  .list-group {
    display: none;
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

  .rating-display {
    margin-top: 2%;
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
