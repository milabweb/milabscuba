<template>
<div class="input-group">
    <input class="form-control" style="width: 80%!important;" v-model="params.data.stock" type="number">
    <span class="input-group-text" @click="stockUpdate()" style="width: 20%!important;"><i class="fa fa-edit "> </i></span>
</div>
</template>

<script>
export default {
    name: "stock",
    data(){
        return{

        }
    },
    methods:{
        stockUpdate(){
            this.$store.dispatch('productUpdate',{id:this.params.data.id,stock:this.params.data.stock})
        }
    }
}
</script>

<style scoped>

</style>
