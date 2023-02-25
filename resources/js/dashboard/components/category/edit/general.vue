<template>
    <div >
        <h6 class="mb-4"></h6>
        <div class="form-floating mb-3">
            <input v-model="getItem.name" type="text" class="form-control" id="floatingInput"
                   placeholder="name@example.com">
            <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating">
                                    <textarea v-model="getItem.description"  class="form-control" placeholder="Leave a comment here"
                                              id="floatingTextarea" style="height: 150px;"></textarea>
            <label for="floatingTextarea">Description</label>
        </div>
    </div>
</template>

<script>
export default {
    name: "general",
    mounted() {

    },
    computed: {
        getItem(){
            return this.$store.getters.getCategory;
        },
        /*items(){
            return this.$store.state.product.items.data;
        },*/
    }
}
</script>

<style scoped>

</style>
