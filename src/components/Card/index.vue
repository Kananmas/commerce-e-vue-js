<script>

export default {
    props: ['className', 'title', 'text', 'img', 'rating', 'price' ,'product'],
    data() {
        return {
            
        }
    },
    methods : { 
        goToProduct() {
            console.log(`here`)
            sessionStorage.setItem('product',JSON.stringify(this.product))
            this.$router.push('/product');
            if(this.$route.fullPath.includes('/product')) {
              
                this.$router.go();
            }
        }
    }
}
</script>

<template>
    <div :class="`card ` + this.className" @click="goToProduct">
        <img class="card-img" :src="this.img" :alt="this.title">
        <div class="card-body">
            <div class="h5 card-title">{{ this.title }}</div>
            <div class="card-text">{{ this.text }}</div>
        </div>
        <ul class="list-group list-group-flush">
            <kbd class="my-2">Rating: {{ this.rating }}</kbd>
            <div class="h4 ">Price: {{ this.price }}$</div>
        </ul>
    </div>
</template>

