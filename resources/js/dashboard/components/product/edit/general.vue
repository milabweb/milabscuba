<template>
        <div >
                <h6 class="mb-4"></h6>
                <div class="form-floating mb-3">
                    <input v-model="getItem.name" type="text" class="form-control" id="floatingInput"
                           placeholder="name@example.com">
                    <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                    <input v-model="getItem.delivery" type="number" class="form-control" id="delivery"
                           placeholder="Password">
                    <label for="delivery">Delivery Buy</label>
                </div>
            <div class="form-floating mb-3">
                    <input v-model="getItem.dine_in"  type="number" class="form-control" id="dineIn"
                           placeholder="Password">
                    <label for="dineIn">Dine In Buy</label>
                </div>
                <div class="form-floating mb-3">
                    <select v-model="getItem.tax" class="form-select" id="floatingSelect"
                            aria-label="Floating label select example">
                        <option value=1>%1</option>
                        <option value=8>%8</option>
                        <option value=18>%18</option>
                    </select>
                    <label for="floatingSelect">Tax</label>
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
            return this.$store.getters.getProduct;
        },
        /*items(){
            return this.$store.state.product.items.data;
        },*/
    }
}
</script>

<style scoped>

</style>
