<script>
import RightArrow from "./components/RightArrow/index.vue";
import LeftArrow from "./components/LeftArrow/index.vue";

export default {
    props: ['pageCount', 'currentPage'],
    emits: ['next-page', 'previous-page'],
    components: {
        RightArrow,
        LeftArrow
    },
    methods: {
        isSelectedPage(page) {
            const isSelected = page == this.currentPage + 1;
            let className = isSelected ? 'number' : '';
            return className;
        },
        isSinglePage() {
            if (innerWidth > 800) {
                if (this.pageCount == 1) {
                    return 'margin-left:35%'
                }
                else {
                    return 'margin-left:20%'
                }
            }
            if (this.pageCount == 1) {
                return 'margin-left:30%'
            }
            else {
                return 'margin-left:5%'
            }
        }
    },
    computed: {

    }
}
</script>

<template>
    <slot />
    <div class="row c-pagination " :style="isSinglePage()">
        <button class="col btn btn-warning pg-btn" @click="$emit('previous-page')" :disabled="pageCount == 1">
            <LeftArrow />
        </button>

        <div :class="`col-1 mx-1 ` + isSelectedPage(page)" v-for="page in pageCount" v-if="pageCount == 1">{{ page }}</div>
        <div :class="`col-1 ` + isSelectedPage(page)" v-for="page in pageCount" v-else>{{ page }}</div>



        <button class="col mx-1 btn btn-warning pg-btn" @click="$emit('next-page')" :disabled="pageCount == 1">
            <RightArrow />
        </button>
    </div>
</template>

<style scoped>
.row {
    text-align: center;
}

.c-pagination {
    margin: 2%;
    margin-left: 20%;
}

.number {
    background-color: orange;
    max-width: 50px;
    border-radius: 12px;
}

.pg-btn {
    max-width: 55px;
}

@media (max-width:800px) {
    .number {
        background-color: orange;
        width: auto;
        border-radius: 12px;
    }


    .pg-btn {
        width: auto;
    }

    .c-pagination {
        margin: 3%;
        padding: 0% 2%;
    }

}
</style>