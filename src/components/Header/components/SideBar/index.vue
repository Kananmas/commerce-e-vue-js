<script>
export default {
    props: ["isOpen", "extra"],
    emits: ['click-close'],
    data() {
        return {
            Status: this.isOpen,
            className: '',
        }
    },
    methods: {
        goToLogIn() {
            this.$router.push(`/login`);
        },
        goToSignIn() {
            this.$router.push('/signin');
        }
    },
    computed: {
        setClassName() {
            this.Status = this.isOpen;
            this.className = this.Status ? "open-menu" : "closed-menu";
            return this.Status;
        },
        changeOverflowOfpage() {
            const body = document.getElementsByTagName('body');

            if (this.Status && window.innerWidth < 800) {
                body[0].style.overflow = 'hidden'
            }
            else {
                body[0].style.overflow = 'auto'
            }
        }
    },
    components: {
    }
}
</script>

<template>
    <div :class="'menu ' + className" v-if="setClassName">
        <div @click="$emit('click-close')">
            <div class="link close">X</div>
            <div class="link" @click="goToLogIn"><strong>Log In</strong></div>
            <div class="link" @click="goToSignIn"><strong>Sign In</strong></div>
            <slot v-if="extra" />
        </div>

    </div>
    {{ changeOverflowOfpage }}
</template>

<style >
.menu {
    overflow-y: hidden;
    height: 103.5vh;
    background-color: white;
    float: right;
    border-left: 1px solid grey;
}

.open-menu {
    animation: open;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
}

.close-menu {
    animation: close;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
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

.close {
    text-align: center;
    display: none;
}

.close:hover {
    animation: scaleup-red;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
}

@media (max-width:600px) {
    .close {
        text-align: close;
        background-color: red;
    }
}

@keyframes scaleup {
    0% {
        padding: 14px;
        background-color: white;
    }

    100% {
        padding: 28px;
        background-color: orange;
    }
}

@keyframes scaleup-red {
    0% {
        padding: 14px;
        background-color: white;
    }

    100% {
        padding: 28px;
        background-color: red;
    }
}

@keyframes open {
    0% {
        width: 0px;
    }

    100% {
        width: 200px;
    }
}

@keyframes close {
    0% {
        width: 400px;
    }

    100% {
        width: 0px;
    }
}

@media (max-width:800px) {
    .close {
        display: block;
    }

    @keyframes open {
        0% {
            width: 0px;
        }

        100% {
            width: 100vw;
        }
    }
}

@media (min-height:1000px) {
    .menu {
        margin: 0%;
        position: sticky;
        left: 80%;
    }
}
</style>