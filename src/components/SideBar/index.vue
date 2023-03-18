<script>
export default {
    props: ["isOpen", "extra"],
    data() {
        return {
            Status: this.isOpen,
            className: '',
        }
    },

    computed: {
        setClassName() {
            this.Status = this.isOpen;
            this.className = this.Status ? "open-menu" : "closed-menu";
            return this.Status;
        },
    }
}
</script>

<template>
    <div :class="'menu ' + className" v-if="setClassName">
        <div class="link"><a><strong>Log In</strong></a></div>
        <div class="link"><a><strong>Sign In</strong></a></div>
        <slot v-if="extra" />
    </div>
</template>

<style >
.menu {
    width: 400px;
    height: 100vh;
    background-color: white;
    float: right;
    border-left: 1px solid grey;
}


.link {
    border-bottom: 1px solid grey;
    padding: 14px;
}

.link:hover {
    border: 1px solid grey;
    animation: scaleup;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
}

@keyframes scaleup {
    0% {
        padding: 14px;
    }

    100% {
        padding: 28px;
    }
}
</style>