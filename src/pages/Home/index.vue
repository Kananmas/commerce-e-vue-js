<script setup>
import Header from "./components/Header/index.vue"
import Footer from "./components/Footer/index.vue"
</script>

<template>
    <Header />
    <div class="row main">
        <div class="col image">

        </div>
        <div class="col offset-2 content">
            <h1 class="main-title">Fashion Up Your <br />
                Look</h1>
            <div class="holder-1">
                <button class="btn btn-danger">Shop now</button>
                <span class="mx-2"><a>What is trending?</a></span>
            </div>
            <div class="box purple-box">
                <h1><i>Live <br /> For <br /> Fashion</i></h1>
            </div>
            <div class="box yellow-box">
                <h1><i>Shop Now!</i></h1>
            </div>
        </div>
    </div>
    <Footer />
</template>


<style scoped>
.purple-box {
    background-color: blue;
    border-radius: 14px;
    animation: popup;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 1.5s;
}

.main {
    margin: 5% 20%;
}

.box {
    float: left;
    color: white;
    margin-top: 14px;
    margin-right: 10px;
    width: 0;
    height: 0;
}

.main-title {
    animation: expand;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
}


@keyframes popup {
    0% {
        width: 0;
        height: 0;
        scale: 0;
    }

    100% {
        width: 200px;
        height: 200px;
        scale: 100%;
    }
}

.box h1 {
    padding: 14%;
}

.image {
    background-image: url(./assets/shopping-lady.png);
    background-repeat: no-repeat;
    background-position: center;
    width: 408px;
    height: 612px;
}

.content {
    float: left;
}

.yellow-box {
    background-color: rgb(255, 174, 0);
    border-radius: 14px;
    animation: popup;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 2.25s;
}

.holder-1 {
    opacity: 0%;
    animation: showup;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
}

@keyframes showup {
    0% {
        opacity: 0%;
    }

    100% {
        opacity: 100%;
    }
}

@keyframes expand {
    0% {
        color: white;
    }

    100% {
        color: black;
    }
}


@media (max-width:600px) {
    .main {
        margin: 5% 15%;
    }

    .content {
        height: 80.5vh;
        margin-left: 0%;
    }

    .image {
        display: none;
    }


    @keyframes popup {
        0% {
            width: 0;
            height: 0;
            scale: 0;
        }

        100% {
            width: 240px;
            height: 240px;
            scale: 100%;
        }
    }
}
</style>