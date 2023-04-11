<script>
// icons of the brands
import adidasIcon from "../../assets/brand-icons/adidas.jpg"
import fillaIcon from "../../assets/brand-icons/filla.jpg"
import newbalanceIcon from "../../assets/brand-icons/newbalance.jpg"
import nikeIcon from "../../assets/brand-icons/nike.jpg"
import pumaIcon from "../../assets/brand-icons/puma.jpg"
import reebookIcon from "../../assets/brand-icons/reebook.jpg"
import thenorthfaceIcon from "../../assets/brand-icons/thenorthface.jpg"
import underarmmorIcon from "../../assets/brand-icons/underarmmor.jpg"

export default {

    data() {
        return {
            brands: [
                { icon: adidasIcon, brand: 'adidas' },
                { icon: fillaIcon, brand: 'filla' },
                { icon: newbalanceIcon, brand: 'newbalance' },
                { icon: nikeIcon, brand: 'nike' },
                { icon: pumaIcon, brand: 'puma' },
                { icon: reebookIcon, brand: 'reebook' },
                { icon: thenorthfaceIcon, brand: 'thenorthface' },
                { icon: underarmmorIcon, brand: 'underarmmor' },
            ],
        }
    },
    methods: {
        goToCollection() {
            this.$router.push("/vitrine");
        }
    },
    computed: {
        isSmallScreen() {
            return window.innerWidth < 800;
        }
    },
    components: {
    }
}

</script>


<template>
    <div class="holder">
        <h2>BRANDS</h2>
        <div class="row">
            <img v-if="!isSmallScreen" class="col-4 my-2 mx-2 img-holder " v-for="brand of brands" :src="brand.icon"
                @click="goToCollection()" />
            <img v-else class="col-3 offset-1 my-2 mx-2 img-holder " v-for="brand of brands" :src="brand.icon"
                @click="goToCollection()" />
        </div>
        <router-view></router-view>
    </div>
</template>


<style scoped>
.holder {
    text-align: center;
    padding: 1% 20%;
}

.img-holder {
    border-bottom: 1px solid black;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    height: 150px;
    width: 200px;
}

.img-holder:hover {
    animation: scaleup;
    animation-duration: 0.24s;
    animation-fill-mode: forwards;
}

@keyframes scaleup {
    0% {
        scale: 100%;
    }

    100% {
        scale: 120%;
        border-bottom: 13px solid orange;
    }
}

@media (max-width:800px) {
    .holder {
        text-align: center;
        padding: 0%;
        margin-left: 1%
    }

    .img-holder {
        margin: 0% 25%;
        height: 130px;
        width: 180px;
    }
}
</style>