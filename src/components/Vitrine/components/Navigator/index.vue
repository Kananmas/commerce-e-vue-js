<script>
export default {
    props: ["isOpen"],
    emits: ['click-close'],
    data() {
        return {
            Status: this.isOpen,
            className: '',
        }
    },
    methods: {
        
    },
    computed: {
        setClassName() {
            this.Status = this.isOpen;
            this.className = this.Status ? "open-navigator" : "close-navd-navigator";
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
    <div :class="'navigator ' + className" v-if="setClassName">
        <div @click="$emit('click-close')">
            <div class="category close-nav">X</div>
            <slot />
        </div>

    </div>
    {{ changeOverflowOfpage }}
</template>

<style>
.navigator {
    position: sticky;
    top: 0%;
    left: 60% auto 80%;
    height: 90vh;
    background-color: white;
    float: right;
    border-left: 1px solid gray;
    border-top: 1px solid gray;
    z-index: 1;
}

.open-navigator {
    animation: open;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
}

.close-navigator {
    animation: close-nav;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
}

.category {
    border-bottom: 1px solid grey;
    padding: 14px;
}

.category:hover {
    border: 1px solid grey;
    animation: scaleup;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
}

.close-nav {
    text-align: center;
    display: none;
}

.close-nav:hover {
    animation: scaleup-red;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
}

@media (max-width:600px) {
    .close-nav {
        text-align: close-nav;
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
        width: 400px;
    }
}

@keyframes close-nav {
    0% {
        width: 400px;
    }

    100% {
        width: 0px;
    }
}

@media (max-width:800px) {
    .close-nav {
        display: block;
    }

    .navigator {
        border-left: 0px;
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
</style>