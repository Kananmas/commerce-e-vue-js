<script>
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
                { icon: adidasIcon, brand: 'adidas', displayName: 'Adidas' },
                { icon: fillaIcon, brand: 'filla', displayName: 'Filla' },
                { icon: newbalanceIcon, brand: 'new balance', displayName: 'New Balance' },
                { icon: nikeIcon, brand: 'nike', displayName: 'Nike' },
                { icon: pumaIcon, brand: 'puma', displayName: 'Puma' },
                { icon: reebookIcon, brand: 'reebook', displayName: 'Reebook' },
                { icon: thenorthfaceIcon, brand: 'thenorthface', displayName: 'The North Face' },
                { icon: underarmmorIcon, brand: 'underarmmor', displayName: 'Underarmmor' },
            ],
        }
    },
    methods: {
        goToCollection(collection) {
            this.$router.push("/vitrine");
        },
        HandelOnMouseEnter(brand) {
            if (brand.status === "hide") {
                brand.status = 'show';
            }
        },
        HandelOnMouseLeave(brand) {
            if (brand.status === "show") {
                brand.status = 'hide';
            }
        }

    },
    computed: {
        isSmallScreen() {
            return innerWidth < 800;
        }
    }
}

</script>


<template>
    <div v-for="brand in brands" class="section"  @click="goToCollection(brand.brand)">
        <img :src=brand.icon alt="Collection" />
        <div class="discription">
            <h1>{{ brand.displayName }}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam reprehenderit fuga rem at, numquam
                ratione, odit doloribus nulla temporibus nesciunt fugiat asperiores quas sed aliquam perspiciatis in!
                Minima, vitae dolores.</p>
        </div>
    </div>
    <router-view></router-view>
</template>


<style scoped>
.section {
    width: 50%;
    margin-left: 25%;

}

img {
    margin-left: 35%;
    margin-top: 1%;
    border: none;
}

.discription {
    float: left;
    border: 1px solid gray;
    border-radius: 12px;
    padding: 2%;
}

.discription:hover {
    animation: scaleup;
    animation-duration: 0.24s;
    animation-fill-mode: forwards;
}

@media (max-width: 800px) {
    .section {
        width: auto;
        margin-left: 8%;
    }

    img {
        margin-left: 12%;
        margin-top: 1%;
    }

    .discription {
        margin-right: 10%;
        float: left;
    }
}


@keyframes scaleup {
    0% {
        scale: 100%;
    }
    100% {
        scale: 110%;
        background-color: rgb(243, 191, 96);
    }
}
</style>