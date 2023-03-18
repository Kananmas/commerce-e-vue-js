<script>
export default {

}
</script>

<template>
    <header>
        <div class="row">
            <div class="col header-icon">
                <div class="icon"></div>
                <h4>Amazon</h4>
            </div>
            <div class="col offset header-links ">
                <a>Collections</a>
                <a>Brands</a>
                <a>Sales</a>
                <a>New</a>
            </div>
            <div class="col buttons">
                <button class="btn btn-warning">menu</button>
                <button class="btn btn-warning mx-2">🛒</button>
            </div>
        </div>
    </header>
</template>


<style scoped>
header {
    padding: 24px;
    width: 100%;
    text-align: center;
}

.header-icon {
    text-align: left;
}

.header-links {
    text-align: left;

}

.header-links a {
    padding: 2% 0%;
    padding-right: 14%;
}

.header-links a:hover {
    text-align: center;
    animation: scaleup;
    animation-duration: 0.15s;
    animation-fill-mode: forwards;
    border-bottom: 4px solid orange;
}

@keyframes scaleup {
    0% {
        font-size: 16px;
    }

    100% {
        font-size: 20px;
    }
}

.buttons {
    text-align: right;
}


@media (max-width:600px) {
    .header-links {
        display: none;
    }
}
</style>