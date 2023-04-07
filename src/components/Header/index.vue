<script>
import { ConstantTypes } from "@vue/compiler-core";
import SideBar from "./components/SideBar/index.vue"
export default {
    data() {
        return {
            currentWidth: window.innerWidth,
            openMenu: false,
            links :[
                'Collections',
                'Brands',
                'Sales',
                'New'
            ]
        }
    },
    methods: {
        handleOnClickMenu() {   
            this.openMenu = !this.openMenu;
            this.checkScreen();
        },
        checkScreen() {
            if (this.currentWidth != window.innerWidth)
                this.currentWidth = window.innerWidth;
        },
        goToRoute(link) {
            if(link == 'Collections'|| link == 'Brands') {
                link = link + '/:id';
            }
            const route = `/${link}`.toLowerCase();

            this.$router.push(route);
        },
        goToHome() {
            this.$router.push("/");
        }
    },
    computed: {
        isSmallScreen() {
            return this.currentWidth <= 800;
        }
    },
    components: {
        SideBar,
    }
}
</script>

<template>
    <SideBar :isOpen="openMenu" :extra="isSmallScreen" @click-close="handleOnClickMenu">
        <div class="link" v-for="link in links" @click="goToRoute(link)"><a ><strong>{{ link }}</strong></a></div>
    </SideBar>
    <header>
        <div class="row">
            <div class="col header-icon" @click="goToHome">
                <div class="icon"></div>
                <h4>Amazon</h4>
            </div>
            <div class="col offset header-links ">
                <a  v-for="link in links" @click="goToRoute(link)">{{ link }}</a>
            </div>
            <div class="col buttons">
                <button @click="handleOnClickMenu" class="btn btn-warning">menu</button>
                <button class="btn btn-warning mx-2">🛒</button>
            </div>
        </div>
    </header>
    <router-view></router-view>
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


@media (max-width:800px) {
    .header-links {
        display: none;
    }

    
}
</style>