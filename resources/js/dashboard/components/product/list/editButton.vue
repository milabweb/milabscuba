<template>
<div>
    <router-link tag="a" :to="`/dashboard/product/edit/${params.data.id}`"  class="m-1" data-id="'row.id'" ><i class="fa fa-edit" /></router-link>
    <span class="m-1" @click=""><i class="fa fa-trash"></i></span>
</div>
</template>

<script>
export default {
   name:'edit',
    data: function () {
        return {};
    },
    beforeMount() {
    },
    mounted() {
    },
    methods: {
    }
};
</script>

<style scoped>

</style>
