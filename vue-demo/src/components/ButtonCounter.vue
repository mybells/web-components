<template>
<div>
    <span>You clicked me {{ num }} times</span>
    <button v-on:click="num++">{{label}}</button>
</div>
</template>

<script>
export default {
    data() {
        return {
            num: 0
        }
    },
    props: {
        label: {
            type: String,
            default: '增加1'
        },
        count: {
            type: Number,
            default: 0
        }
    },
    created() {
        this.num = this.count;
    },
}
</script>
