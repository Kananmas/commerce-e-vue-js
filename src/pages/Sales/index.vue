<script>
import Card from "../../components/Card/index.vue";
import Pagination from "../../components/Pagination/index.vue";

export default {
  data() {
    return {
      products: [],
      isFetched: false,
      start: 0,
      finish: 5,
      currentPage: 0,
      max: 2,
      url: "https://fakestoreapi.com/products",
    };
  },
  methods: {
    goToProduct(product) {
      sessionStorage.setItem("product", JSON.stringify(product));
      sessionStorage.setItem("otherProducts", JSON.stringify(this.products));
      this.$router.push("/product");
    },
    goToNextPage() {
      if (this.currentPage < 1) {
        this.currentPage++;
        this.start += 5;
      }
    },
    goToPreviousPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.start -= 5;
      }
    },
  },
  computed: {
    showingProducts() {
      return this.products.slice(this.start, this.start + this.finish);
    },
  },
  mounted() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.products = res.filter(
          (pro) => pro == "men's clothing" || "women's clothing"
        );
        this.isFetched = true;
      });
  },
  components: {
    Card,
    Pagination,
  },
};
</script>

<template>
  <div class="sales" v-if="isFetched">
    <Card
      class-name="my-2"
      v-for="product in showingProducts"
      :title="product.title"
      :text="product.description.slice(0, 135)"
      :price="product.price"
      :img="[, , , , product.image]"
      :rating="product.rating.rate"
      :product="product"
      @go-to-products="goToProduct(product)"
    />
  </div>
  <div class="pagination-holder" v-if="isFetched">
    <Pagination
      :page-count="2"
      :current-page="currentPage"
      @next-page="goToNextPage"
      @previous-page="goToPreviousPage"
    />
  </div>
</template>

<style>
.sales {
  display: flex;
}

.pagination-holder {
  margin-left: 25%;
}

.card {
  width: 450px;
  height: 470px;
  float: left;
  margin: 0% 1%;
}

@media (max-width: 800px) {
  .sales {
    display: block;
    margin: 0% 2%;
  }

  .pagination-holder {
    margin-left: 0%;
  }

  .card {
    width: auto;
    height: auto;
    margin-left: 1%;
  }
}
</style>
