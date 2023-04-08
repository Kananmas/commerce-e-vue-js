<script>
import Navigator from "./components/Navigator/index.vue";
import Pagination from "./components/Pagination/index.vue"
import Card from "../../components/Card/index.vue"
import MenuIcon from "../../components/MenuIcon/index.vue"

import { randomString } from "../../utils/random-string.util"
import { toPascalCase } from "./utils/to-pascal-case.util"
import { fetchFrom } from "../../utils/fech-from.utils"

export default {
    data() {
        return {
            currentBrand: { brand: '', products: [] },
            baseURL: 'https://dummyjson.com/products/category/',
            showingProducts: [],
            isOpen: true,
            isLoaded: false,
            pageCount: 0,
            start: 0,
            end: 5,
            currentPage: 0,
            productCategories: [
                "all-products",
                "womens-dresses",
                "tops",
                "womens-shoes",
                "mens-shirts",
                "mens-shoes",
                "mens-watches",
                "womens-watches",
                "womens-bags",
            ],
            selectedCategory: `womens-dresses`,
        }
    },

    methods: {
        goToNextPage() {
            if (this.currentPage + 1 < this.pageCount) {
                this.start += 5;
                this.currentPage++;
                this.end += 5;
            }
        },
        goToPreviousPage() {
            if (this.currentPage > 0) {
                this.start -= 5;
                this.currentPage--;
                this.end -= 5;
            }
        },
        toPascalCase,
        handleOnClickCategory() {
            if (innerWidth <= 800)
                this.isOpen = !this.isOpen;
        },
        handleOnChangeCategory(category) {
            this.selectedCategory = category;
            this.refetchProducts(category)
        },
        refetchProducts(category = '') {
            const showAll = category == 'all-products';
            let targetUrl = this.baseURL;
            if (showAll) {
                this.isLoaded = false;
                this.currentBrand.products = [];
                for (let i = 1; i < this.productCategories.length; i++) {
                    targetUrl = this.baseURL + this.productCategories[i];
                    fetchFrom(targetUrl, (res) => {
                        this.currentBrand.products = this.currentBrand.products.concat(this.currentBrand.products, res.products);
                    })

                }
                this.isLoaded = true;
                return;
            }

            targetUrl = this.baseURL + this.selectedCategory;
            fetchFrom(targetUrl, res => {
                console.log(res);
                this.currentBrand.products = res.products;
            });


        },
        randomString
    },
    computed: {
        isSmallScreen() {
            return window.innerWidth < 800;
        },
        removeRepetitive() {
            let products = [...this.currentBrand.products]
            if (products.length) {
                let repeates = {}
                for (let i = 0; i < products.length; i++) {
                    let title = products[i].title;
                    if (!repeates[title]) {
                        repeates[title] = 'added';
                    }
                    else {
                        products.splice(i, 1);
                    }
                }
                this.currentBrand.products = products;
                const pageCount = Math.ceil(Object.keys(repeates).length / 5)
                this.pageCount = pageCount;
                return pageCount;
            }
        },
        setShowingProducts() {
            this.showingProducts = this.currentBrand.products.slice(this.start, this.end);
        }
    },
    components: {
        Navigator,
        Pagination,
        Card,
        MenuIcon
    },
    mounted() {
        const fullPath = this.$route.fullPath;
        const currentBrand = fullPath.slice(fullPath.lastIndexOf('/') + 1);
        this.currentBrand.brand = currentBrand;

        if (window.innerWidth <= 800) {
            this.isOpen = false;
        }
    },
    watch: {
        fetchProducts: {
            handler: function () {
                if (this.selectedCategory) {

                    fetchFrom(this.baseURL + this.selectedCategory, res => {
                        console.log(res)
                        this.currentBrand.products = res.products
                        this.isLoaded = true;
                    });
                }
            },
            immediate: true
        }
    }
}
</script>


<template>
    {{ setShowingProducts }}
    <div v-if="isLoaded">
        <Navigator :is-open="isOpen" @click-close="handleOnClickCategory">
            <div class="category" v-for="category in productCategories" @click="handleOnChangeCategory(category)"><strong>{{
                toPascalCase(category) }}</strong></div>
        </Navigator>

        <div v-if="isSmallScreen && !isOpen">
            <Card :key="randomString" v-for="product in showingProducts" className="my-2 mx-2" :rating="product.rating"
                :price="product.price" :title="product.title" :img="product.images[4]" :text="product.description"
                :product="product" />
        </div>

        <div class="list" v-else-if="!isSmallScreen">
            <div class="row">
                <Card :key="randomString" :rating="product.rating" v-for="product in showingProducts" :price="product.price"
                    className="col mx-2" :title="product.title" :img="product.images[4]" :text="product.description"
                    :product="product" />
            </div>

        </div>

        <Pagination :page-count="removeRepetitive" v-if="!isOpen || !isSmallScreen" @next-page="goToNextPage"
            @previous-page="goToPreviousPage" :current-page="currentPage">
            <div class="row mx-2">
                <button class="col btn btn-danger" @click="handleOnClickCategory" v-if="!isOpen">
                    <MenuIcon />
                </button>
            </div>
        </Pagination>
    </div>

    <div class="spinner-border text-warning spinner" role="status" v-if="!isLoaded">
    </div>
</template>


<style scoped>
.spinner {
    margin-left: 46%;
    margin-top: 25%;
    margin-bottom: 25%;
}

.list {
    width: 80%;
}
</style>