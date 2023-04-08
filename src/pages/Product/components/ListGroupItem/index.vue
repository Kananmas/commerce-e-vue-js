<script>
import { title } from 'process';

export default {
    props: ['title', 'value']
}

</script>

<template>
    <li class="list-group-item">
        <div><strong>{{ title }}</strong></div>
        <div class="value">{{ value }}</div>
    </li>
</template>


<style scoped>
.list-group-item div {
    float: left;
    display: inline;
}

.value {
    margin-left: 13px;
}
</style>